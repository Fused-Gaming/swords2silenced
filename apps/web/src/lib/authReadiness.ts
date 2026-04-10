export type IntegrationStatus = 'ok' | 'degraded' | 'unknown';

export type AuthCheckResult = {
  status: IntegrationStatus;
  diagnostics: string[];
};

const MIN_SECRET_LENGTH = 20;

function hasValue(value: string | undefined): boolean {
  return Boolean(value && value.trim().length > 0);
}

function parseIsoDate(value: string | undefined): Date | null {
  if (!hasValue(value)) {
    return null;
  }

  const parsed = new Date(value as string);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function readExpiryStatus(expiryIso: string | undefined, label: string): string[] {
  if (!hasValue(expiryIso)) {
    return [`${label} expiry is not configured`];
  }

  const parsed = parseIsoDate(expiryIso);

  if (!parsed) {
    return [`${label} expiry is invalid ISO date`];
  }

  if (parsed.getTime() <= Date.now()) {
    return [`${label} token is expired`];
  }

  return [];
}

export function evaluateGithubAuth(): AuthCheckResult {
  const diagnostics: string[] = [];
  const hasToken = hasValue(process.env.GITHUB_TOKEN);
  const hasAppId = hasValue(process.env.GITHUB_APP_ID);

  if (!hasToken && !hasAppId) {
    diagnostics.push('GitHub token or app id is required');
  }

  diagnostics.push(...readExpiryStatus(process.env.GITHUB_TOKEN_EXPIRES_AT, 'GitHub'));

  return {
    status: diagnostics.length === 0 ? 'ok' : 'degraded',
    diagnostics,
  };
}

export function evaluateTelegramAuth(): AuthCheckResult {
  const diagnostics: string[] = [];
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!hasValue(token)) {
    diagnostics.push('Telegram bot token is required');
  } else if (!(token as string).includes(':')) {
    diagnostics.push('Telegram bot token format is invalid');
  }

  diagnostics.push(...readExpiryStatus(process.env.TELEGRAM_BOT_TOKEN_EXPIRES_AT, 'Telegram'));

  return {
    status: diagnostics.length === 0 ? 'ok' : 'degraded',
    diagnostics,
  };
}

export function evaluateAdminAuth(): AuthCheckResult {
  const diagnostics: string[] = [];
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const rawPassword = process.env.ADMIN_PASSWORD;

  if (hasValue(passwordHash)) {
    if ((passwordHash as string).trim().length < MIN_SECRET_LENGTH) {
      diagnostics.push('Admin password hash appears too short');
    }
  } else if (hasValue(rawPassword)) {
    diagnostics.push('Admin password hash should be used instead of plain password');
  } else {
    diagnostics.push('Admin password hash is required');
  }

  diagnostics.push(...readExpiryStatus(process.env.ADMIN_SECRET_EXPIRES_AT, 'Admin'));

  return {
    status: diagnostics.length === 0 ? 'ok' : 'degraded',
    diagnostics,
  };
}
