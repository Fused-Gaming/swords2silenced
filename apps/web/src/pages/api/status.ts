import type { NextApiRequest, NextApiResponse } from 'next';

type IntegrationStatus = 'ok' | 'degraded' | 'unknown';

type StatusResponse = {
  status: 'ok' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  version: string;
  checks: {
    api: IntegrationStatus;
    githubAuth: IntegrationStatus;
    telegramAuth: IntegrationStatus;
    adminAuth: IntegrationStatus;
  };
  notes: string[];
};

const START_TIME = Date.now();

export default function handler(req: NextApiRequest, res: NextApiResponse<StatusResponse>) {
  const githubConfigured = Boolean(process.env.GITHUB_TOKEN || process.env.GITHUB_APP_ID);
  const telegramConfigured = Boolean(process.env.TELEGRAM_BOT_TOKEN);
  const adminConfigured = Boolean(process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD);

  const checks = {
    api: 'ok' as const,
    githubAuth: (githubConfigured ? 'ok' : 'degraded') as IntegrationStatus,
    telegramAuth: (telegramConfigured ? 'ok' : 'degraded') as IntegrationStatus,
    adminAuth: (adminConfigured ? 'ok' : 'degraded') as IntegrationStatus,
  };

  const degraded = Object.values(checks).some((status) => status !== 'ok');

  res.status(200).json({
    status: degraded ? 'degraded' : 'ok',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor((Date.now() - START_TIME) / 1000),
    version: '0.1.0',
    checks,
    notes: [
      'Use this endpoint for deployment health probes and auth bootstrap checks.',
      'If auth checks return degraded, verify environment variables and secrets rotation.',
    ],
  });
}
