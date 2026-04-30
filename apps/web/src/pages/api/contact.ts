import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/emailService';

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
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body as ContactFormData;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    // Create HTML email body
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f0021;">New Contact Form Submission</h2>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #fafbfc; padding: 20px; border-radius: 8px; border-left: 4px solid #751006;">
          <h3 style="margin-top: 0; color: #1f0021;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />

        <p style="color: #666; font-size: 12px;">
          This email was sent from the contact form at ${process.env.NEXT_PUBLIC_SITE_URL}
        </p>
      </div>
    `;

    const textBody = `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form at ${process.env.NEXT_PUBLIC_SITE_URL}
    `.trim();

    // Send email to admin
    const adminResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@swordstosilenced.com',
      subject: `[Contact Form] ${subject}`,
      html: htmlBody,
      text: textBody,
      replyTo: email,
    });

    if (!adminResult.success) {
      console.error('Failed to send email to admin:', adminResult.error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: adminResult.error,
      });
    }

    // Send confirmation email to user
    const confirmationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f0021;">Message Received</h2>

        <p>Hello ${name},</p>

        <p>Thank you for contacting <strong>Swords to Silenced</strong>. We have received your message and will get back to you as soon as possible.</p>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Your Message Details:</strong></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #666;">${message}</p>
        </div>

        <p>We appreciate your interest in our research and your feedback.</p>

        <p style="color: #666; margin-top: 30px;">
          Best regards,<br>
          <strong>Swords to Silenced</strong><br>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}">${process.env.NEXT_PUBLIC_SITE_URL}</a>
        </p>
      </div>
    `;

    const confirmationText = `
Hello ${name},

Thank you for contacting Swords to Silenced. We have received your message and will get back to you as soon as possible.

Your Message Details:
Subject: ${subject}

Message:
${message}

---
Swords to Silenced
${process.env.NEXT_PUBLIC_SITE_URL}
    `.trim();

    await sendEmail({
      to: email,
      subject: 'We received your message - Swords to Silenced',
      html: confirmationHtml,
      text: confirmationText,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. We will be in touch soon.',
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form error:', errorMessage);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: errorMessage,
    });
  }
}
