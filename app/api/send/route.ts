import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { ContactEmail } from '@/emails/ContactEmail';
import { InvestmentEmail } from '@/emails/InvestmentEmail';
import { OrderEmail } from '@/emails/OrderEmail';
import React from 'react';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body || {};

    if (!type || !data) {
      return Response.json({ error: 'Missing type or data' }, { status: 400 });
    }

    let emailHtml = '';
    let subject = '';
    let to = process.env.DEFAULT_EMAIL;

    switch (type) {
      case 'contact':
        emailHtml = await render(React.createElement(ContactEmail, data));
        subject = `New Contact Inquiry: ${data.subject || 'General'}`;
        break;
      case 'investment':
        emailHtml = await render(React.createElement(InvestmentEmail, data));
        subject = `New Investment Enquiry from ${data.institution || data.fullname}`;
        break;
      case 'order':
        emailHtml = await render(React.createElement(OrderEmail, data));
        subject = `New Order Request: ${data.product || 'Bulk'}`;
        break;
      default:
        return Response.json({ error: 'Invalid enquiry type' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"LiFT Farms Website" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html: emailHtml,
    });

    return Response.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
