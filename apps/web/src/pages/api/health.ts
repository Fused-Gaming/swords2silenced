import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  timestamp: string;
  version: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
  });
}
