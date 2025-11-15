import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format the email content with all specifications
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3d7a54; border-bottom: 3px solid #3d7a54; padding-bottom: 10px;">
          New Custom Order Request
        </h1>
        
        <h2 style="color: #333; margin-top: 30px;">Customer Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.email}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Quantity:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.quantity}</td>
          </tr>
        </table>

        <h2 style="color: #333; margin-top: 30px;">Bag Specifications</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Paper Type:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.paperType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Paper GSM:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.paperGSM || 'Not specified'}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Printing:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.printing || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Handles:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.handles || 'Not specified'}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Lamination:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.lamination || 'None'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Special Treatment:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.specialTreatment || 'None'}</td>
          </tr>
        </table>

        <h2 style="color: #333; margin-top: 30px;">Size & Dimensions</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Pre-defined Variety:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.variety || 'Not selected'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Custom Size:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${formData.customSize || 'Not specified'}</td>
          </tr>
        </table>

        ${formData.additionalRequirements ? `
          <h2 style="color: #333; margin-top: 30px;">Additional Requirements</h2>
          <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #3d7a54; margin-top: 10px;">
            ${formData.additionalRequirements.replace(/\n/g, '<br>')}
          </div>
        ` : ''}

        <div style="margin-top: 40px; padding: 20px; background-color: #3d7a54; color: white; text-align: center; border-radius: 5px;">
          <p style="margin: 0;">This is an automated message from EcoBags Custom Order System</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Please respond to the customer within 24 hours</p>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"EcoBags Order System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || 'balamsanjay2003@gmail.com',
      replyTo: formData.email,
      subject: `New Custom Order Request - ${formData.name} (${formData.quantity} bags)`,
      html: emailContent,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Order request sent successfully!',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send order request. Please try again or contact us directly.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

