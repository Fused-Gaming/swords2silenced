export type IntegrationName = 'github' | 'telegram' | 'admin';

export type DiagnosticReasonCode = 'missing_env' | 'invalid_format' | 'legacy_secret_in_use';

export type IntegrationValidation = {
  integration: IntegrationName;
  configured: boolean;
  status: 'ok' | 'degraded';
  reasonCodes: DiagnosticReasonCode[];
  message: string;
};

export type AuthValidationResult = {
  github: IntegrationValidation;
  telegram: IntegrationValidation;
  admin: IntegrationValidation;
};

export type EnvSource = Record<string, string | undefined>;

const MIGRATION_FLAG_NAME = 'ADMIN_PASSWORD_MIGRATION_ENABLED';

const isNonEmpty = (value: string | undefined): value is string =>
  Boolean(value && value.trim().length > 0);

const isTruthyFlag = (value: string | undefined): boolean => {
  if (!isNonEmpty(value)) {
    return false;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase());
};

const isValidGitHubToken = (token: string | undefined): boolean => {
  if (!isNonEmpty(token)) {
    return false;
  }

  const normalized = token.trim();

  return /^(gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})$/.test(normalized);
};

const isValidGitHubAppId = (appId: string | undefined): boolean => {
  if (!isNonEmpty(appId)) {
    return false;
  }

  return /^\d+$/.test(appId.trim());
};

const isValidTelegramToken = (token: string | undefined): boolean => {
  if (!isNonEmpty(token)) {
    return false;
  }

  return /^\d+:[A-Za-z0-9_-]{20,}$/.test(token.trim());
};

const isValidAdminPasswordHash = (hash: string | undefined): boolean => {
  if (!isNonEmpty(hash)) {
    return false;
  }

  const normalized = hash.trim();

  return (
    /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(normalized) ||
    /^\$argon2(id|i|d)\$/.test(normalized) ||
    /^pbkdf2:[A-Za-z0-9_-]+:\d+:[A-Za-z0-9+/=]+$/.test(normalized)
  );
};

const buildValidation = (
  integration: IntegrationName,
  reasonCodes: DiagnosticReasonCode[],
  message: string
): IntegrationValidation => ({
  integration,
  configured: reasonCodes.length === 0,
  status: reasonCodes.length === 0 ? 'ok' : 'degraded',
  reasonCodes,
  message,
});

const validateGitHub = (env: EnvSource): IntegrationValidation => {
  const token = env.GITHUB_TOKEN;
  const appId = env.GITHUB_APP_ID;
  const tokenPresent = isNonEmpty(token);
  const appIdPresent = isNonEmpty(appId);

  if (!tokenPresent && !appIdPresent) {
    return buildValidation(
      'github',
      ['missing_env'],
      'Missing GitHub credentials. Provide GITHUB_TOKEN or GITHUB_APP_ID.'
    );
  }

  if (tokenPresent && !isValidGitHubToken(token)) {
    return buildValidation('github', ['invalid_format'], 'GITHUB_TOKEN is present but malformed.');
  }

  if (appIdPresent && !isValidGitHubAppId(appId)) {
    return buildValidation(
      'github',
      ['invalid_format'],
      'GITHUB_APP_ID is present but must be numeric.'
    );
  }

  return buildValidation('github', [], 'GitHub authentication configuration is valid.');
};

const validateTelegram = (env: EnvSource): IntegrationValidation => {
  const token = env.TELEGRAM_BOT_TOKEN;

  if (!isNonEmpty(token)) {
    return buildValidation('telegram', ['missing_env'], 'Missing TELEGRAM_BOT_TOKEN.');
  }

  if (!isValidTelegramToken(token)) {
    return buildValidation(
      'telegram',
      ['invalid_format'],
      'TELEGRAM_BOT_TOKEN is present but malformed.'
    );
  }

  return buildValidation('telegram', [], 'Telegram authentication configuration is valid.');
};

const validateAdmin = (env: EnvSource): IntegrationValidation => {
  const hash = env.ADMIN_PASSWORD_HASH;
  const legacyPassword = env.ADMIN_PASSWORD;
  const migrationEnabled = isTruthyFlag(env[MIGRATION_FLAG_NAME]);

  if (isNonEmpty(hash)) {
    if (!isValidAdminPasswordHash(hash)) {
      return buildValidation(
        'admin',
        ['invalid_format'],
        'ADMIN_PASSWORD_HASH is present but format is not recognized.'
      );
    }

    return buildValidation('admin', [], 'Admin hash-based authentication configuration is valid.');
  }

  if (isNonEmpty(legacyPassword) && migrationEnabled) {
    return buildValidation(
      'admin',
      ['legacy_secret_in_use'],
      'Legacy ADMIN_PASSWORD is enabled via migration flag. Rotate to ADMIN_PASSWORD_HASH.'
    );
  }

  if (isNonEmpty(legacyPassword) && !migrationEnabled) {
    return buildValidation(
      'admin',
      ['missing_env'],
      'ADMIN_PASSWORD is set but migration flag is disabled; configure ADMIN_PASSWORD_HASH.'
    );
  }

  return buildValidation(
    'admin',
    ['missing_env'],
    'Missing admin secret. Configure ADMIN_PASSWORD_HASH.'
  );
};

export const validateAuthConfig = (env: EnvSource = process.env): AuthValidationResult => ({
  github: validateGitHub(env),
  telegram: validateTelegram(env),
  admin: validateAdmin(env),
});
