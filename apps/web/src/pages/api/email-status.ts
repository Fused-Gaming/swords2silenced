import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyEmailConfig } from '../../lib/emailService';

interface StatusResponse {
  configured: boolean;
  config?: object;
  status?: string;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      configured: false,
      message: 'Method not allowed',
    });
  }

  try {
    const result = await verifyEmailConfig();
    return res.status(200).json(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({
      configured: false,
      message: `Email configuration error: ${errorMessage}`,
    });
  }
}
