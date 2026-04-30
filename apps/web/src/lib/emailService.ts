import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const mailHost = process.env.MAIL_HOST;
  const mailPort = parseInt(process.env.MAIL_PORT || '587', 10);
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;
  const mailSecure = process.env.MAIL_SECURE === 'true';

  if (!mailHost || !mailUser || !mailPass) {
    throw new Error('Email configuration incomplete. Check MAIL_HOST, MAIL_USER, MAIL_PASS in .env.local');
  }

  transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: mailSecure,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  return transporter;
}

export async function sendEmail(options: EmailOptions): Promise<SendEmailResult> {
  try {
    const transporter = getTransporter();
    const fromName = process.env.MAIL_FROM_NAME || 'Swords to Silenced';
    const from = `${fromName} <${process.env.MAIL_FROM}>`;

    const mailOptions = {
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      replyTo: options.replyTo,
      cc: options.cc,
      bcc: options.bcc,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email send error:', errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

export async function verifyEmailConfig(): Promise<{
  configured: boolean;
  config?: object;
  status?: string;
  message?: string;
}> {
  try {
    const transporter = getTransporter();
    await transporter.verify();
    return {
      configured: true,
      config: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
      },
      status: 'SMTP connection verified',
      message: 'Email service is configured and ready',
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      configured: false,
      message: `Email configuration error: ${errorMessage}`,
    };
  }
}
