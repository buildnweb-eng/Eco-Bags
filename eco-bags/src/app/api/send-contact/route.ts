import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = formData;

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"EcoBags Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email, // Set reply-to to customer's email
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #3d7a54;">EcoBags Contact Form</h1>
          </div>
          <p>Dear EcoBags Team,</p>
          <p>You have received a new message from your website contact form:</p>
          
          <h2 style="color: #3d7a54; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Contact Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <h2 style="color: #3d7a54; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Message</h2>
          <p style="white-space: pre-wrap;">${message}</p>

          <p style="margin-top: 30px; text-align: center; color: #777;">
            This email was sent from your EcoBags website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}

