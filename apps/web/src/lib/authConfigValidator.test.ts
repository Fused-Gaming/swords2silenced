/* eslint-env jest */
import { validateAuthConfig } from './authConfigValidator';

describe('validateAuthConfig', () => {
  it('returns missing_env for all integrations when env is empty', () => {
    const result = validateAuthConfig({});

    expect(result.github.reasonCodes).toEqual(['missing_env']);
    expect(result.telegram.reasonCodes).toEqual(['missing_env']);
    expect(result.admin.reasonCodes).toEqual(['missing_env']);
  });

  it('accepts valid GitHub token or app id formats', () => {
    const byToken = validateAuthConfig({
      GITHUB_TOKEN: 'ghp_abcdefghijklmnopqrstuvwxyz1234',
      TELEGRAM_BOT_TOKEN: '123456789:abcdefghijklmnopqrstuvwxyzABCDE',
      ADMIN_PASSWORD_HASH: '$2b$12$C6UzMDM.H6dfI/f/IKxGhuB8H4jA8vV6A5f8Y2R2f2w2z1X4vV2c2',
    });

    expect(byToken.github.status).toBe('ok');
    expect(byToken.telegram.status).toBe('ok');
    expect(byToken.admin.status).toBe('ok');

    const byAppId = validateAuthConfig({
      GITHUB_APP_ID: '12345',
      TELEGRAM_BOT_TOKEN: '123456789:abcdefghijklmnopqrstuvwxyzABCDE',
      ADMIN_PASSWORD_HASH: '$argon2id$v=19$m=65536,t=3,p=4$YWJj$YWJj',
    });

    expect(byAppId.github.status).toBe('ok');
  });

  it('returns invalid_format for malformed secrets', () => {
    const result = validateAuthConfig({
      GITHUB_TOKEN: 'bad-token',
      TELEGRAM_BOT_TOKEN: 'bad',
      ADMIN_PASSWORD_HASH: 'plaintext',
    });

    expect(result.github.reasonCodes).toEqual(['invalid_format']);
    expect(result.telegram.reasonCodes).toEqual(['invalid_format']);
    expect(result.admin.reasonCodes).toEqual(['invalid_format']);
  });

  it('marks legacy admin secret usage when migration flag is enabled', () => {
    const result = validateAuthConfig({
      GITHUB_APP_ID: '12345',
      TELEGRAM_BOT_TOKEN: '123456789:abcdefghijklmnopqrstuvwxyzABCDE',
      ADMIN_PASSWORD: 'legacy-secret',
      ADMIN_PASSWORD_MIGRATION_ENABLED: 'true',
    });

    expect(result.admin.reasonCodes).toEqual(['legacy_secret_in_use']);
    expect(result.admin.status).toBe('degraded');
  });
});
