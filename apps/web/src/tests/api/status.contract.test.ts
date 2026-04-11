/* eslint-env jest */
import type { NextApiRequest, NextApiResponse } from 'next';
import handler, { type ApiStatusResponse } from '../../pages/api/status';

type JsonBody =
  | ApiStatusResponse
  | { status: 'degraded'; checks: { api: 'degraded' }; notes: string[]; version: string };

function createMockResponse() {
  const result: {
    statusCode: number;
    body: JsonBody | null;
    headers: Record<string, string>;
  } = {
    statusCode: 200,
    body: null,
    headers: {},
  };

  const res = {
    status(code: number) {
      result.statusCode = code;
      return this;
    },
    json(payload: JsonBody) {
      result.body = payload;
      return this;
    },
    setHeader(name: string, value: string) {
      result.headers[name] = value;
      return this;
    },
  } as unknown as NextApiResponse<JsonBody>;

  return { res, result };
}

function runStatus(envOverrides: Record<string, string | undefined>, method = 'GET') {
  const previous = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_TOKEN_EXPIRES_AT: process.env.GITHUB_TOKEN_EXPIRES_AT,
    GITHUB_APP_ID: process.env.GITHUB_APP_ID,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_BOT_TOKEN_EXPIRES_AT: process.env.TELEGRAM_BOT_TOKEN_EXPIRES_AT,
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_SECRET_EXPIRES_AT: process.env.ADMIN_SECRET_EXPIRES_AT,
    npm_package_version: process.env.npm_package_version,
  };

  Object.entries(envOverrides).forEach(([key, value]) => {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  });

  const req = { method } as NextApiRequest;
  const { res, result } = createMockResponse();
  handler(req, res);

  Object.entries(previous).forEach(([key, value]) => {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  });

  return result;
}

describe('/api/status response contract', () => {
  it('returns healthy contract fields when all auth checks pass', () => {
    const future = '2099-01-01T00:00:00.000Z';
    const response = runStatus({
      GITHUB_TOKEN: 'ghp_abcdefghijklmnopqrstuvwxyz1234',
      GITHUB_TOKEN_EXPIRES_AT: future,
      TELEGRAM_BOT_TOKEN: '123456789:abcdefghijklmnopqrstuvwxyzABCDE',
      TELEGRAM_BOT_TOKEN_EXPIRES_AT: future,
      ADMIN_PASSWORD_HASH: '$2b$12$C6UzMDM.H6dfI/f/IKxGhuB8H4jA8vV6A5f8Y2R2f2w2z1X4vV2c2',
      ADMIN_SECRET_EXPIRES_AT: future,
      npm_package_version: '9.9.9',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      status: 'ok',
      version: '9.9.9',
      checks: {
        api: 'ok',
        githubAuth: 'ok',
        telegramAuth: 'ok',
        adminAuth: 'ok',
      },
    });

    expect((response.body as ApiStatusResponse).notes.length).toBeGreaterThan(0);
  });

  it('returns degraded contract fields when env combinations are incomplete', () => {
    const future = '2099-01-01T00:00:00.000Z';
    const response = runStatus({
      GITHUB_TOKEN: undefined,
      GITHUB_APP_ID: undefined,
      GITHUB_TOKEN_EXPIRES_AT: future,
      TELEGRAM_BOT_TOKEN: 'bad-format-token',
      TELEGRAM_BOT_TOKEN_EXPIRES_AT: future,
      ADMIN_PASSWORD_HASH: undefined,
      ADMIN_PASSWORD: undefined,
      ADMIN_SECRET_EXPIRES_AT: future,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      status: 'degraded',
      checks: {
        api: 'ok',
        githubAuth: 'degraded',
        telegramAuth: 'degraded',
        adminAuth: 'degraded',
      },
    });

    expect((response.body as ApiStatusResponse).diagnostics.githubAuth[0]).toContain('required');
  });

  it('returns 405 with stable fallback schema for unsupported methods', () => {
    const response = runStatus({}, 'POST');

    expect(response.statusCode).toBe(405);
    expect(response.headers.Allow).toBe('GET');
    expect(response.body).toEqual({
      status: 'degraded',
      checks: { api: 'degraded' },
      notes: ['Method not allowed. Use GET for health probes.'],
      version: expect.any(String),
    });
  });
});
