import type { NextApiRequest, NextApiResponse } from 'next';
import {
  type DiagnosticReasonCode,
  type IntegrationName,
  validateAuthConfig,
} from '../../lib/authConfigValidator';

type IntegrationStatus = 'ok' | 'degraded' | 'unknown';

type IntegrationDiagnostic = {
  integration: IntegrationName;
  status: IntegrationStatus;
  reasonCodes: DiagnosticReasonCode[];
  message: string;
};

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
  diagnostics: IntegrationDiagnostic[];
  notes: string[];
};

const START_TIME = Date.now();

export default function handler(req: NextApiRequest, res: NextApiResponse<StatusResponse>) {
  const auth = validateAuthConfig(process.env);

  const checks = {
    api: 'ok' as const,
    githubAuth: auth.github.status,
    telegramAuth: auth.telegram.status,
    adminAuth: auth.admin.status,
  };

  const diagnostics: IntegrationDiagnostic[] = [
    {
      integration: 'github',
      status: auth.github.status,
      reasonCodes: auth.github.reasonCodes,
      message: auth.github.message,
    },
    {
      integration: 'telegram',
      status: auth.telegram.status,
      reasonCodes: auth.telegram.reasonCodes,
      message: auth.telegram.message,
    },
    {
      integration: 'admin',
      status: auth.admin.status,
      reasonCodes: auth.admin.reasonCodes,
      message: auth.admin.message,
    },
  ];

  const degraded = Object.values(checks).some((status) => status !== 'ok');

  res.status(200).json({
    status: degraded ? 'degraded' : 'ok',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor((Date.now() - START_TIME) / 1000),
    version: '0.1.0',
    checks,
    diagnostics,
    notes: [
      'Use this endpoint for deployment health probes and auth bootstrap checks.',
      'If auth checks return degraded, inspect diagnostics reasonCodes for deterministic remediation.',
    ],
  });
}
