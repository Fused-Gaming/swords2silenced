import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed', error: 'Only POST requests are accepted' });
  }

  const { name, email, subject, message } = req.body as ContactFormData;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: 'All fields are required',
    });
  }

  // Simple email validation without polynomial complexity
  // Email must be under 254 chars (RFC 5321) and contain @ and .
  if (email.length > 254 || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: 'Invalid email address',
    });
  }

  const emailParts = email.split('@');
  if (emailParts.length !== 2 || !emailParts[0].length || !emailParts[1].length) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: 'Invalid email address',
    });
  }

  if (!emailParts[1].includes('.')) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: 'Invalid email address',
    });
  }

  if (message.length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: 'Message must be at least 10 characters',
    });
  }

  try {
    // TODO: Send email or store submission
    // For now, just log to console and return success
    // eslint-disable-next-line no-console
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send email via SendGrid, Mailgun, etc.
    // 2. Store submission in database
    // 3. Send confirmation email to user

    return res.status(200).json({
      success: true,
      message: 'Your message has been received. We will get back to you soon.',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred processing your request',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
