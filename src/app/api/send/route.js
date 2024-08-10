import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log('Received email data:', { email, subject, message });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: 'djigal001@gmail.com',
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>New message submitted:</p>
        <p>${message}</p>
        <p>From: ${email}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' });
  }
}
