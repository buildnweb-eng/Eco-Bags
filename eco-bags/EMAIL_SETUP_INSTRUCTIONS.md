# Email Setup Instructions for EcoBags Custom Orders

## Overview
Your custom orders form will now send emails to `balamsanjay2003@gmail.com` using Gmail's SMTP server.

## Setup Steps

### 1. Enable 2-Factor Authentication on Your Gmail Account

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Scroll down to "2-Step Verification"
3. Click "Get started" and follow the setup process
4. Complete the 2FA setup (you can use SMS, Google Authenticator, etc.)

### 2. Generate an App Password

**Important:** You CANNOT use your regular Gmail password for SMTP. You need an "App Password".

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Or go to Google Account → Security → 2-Step Verification → App passwords
2. You may need to sign in again
3. In the "Select app" dropdown, choose **"Mail"**
4. In the "Select device" dropdown, choose **"Other (Custom name)"**
5. Type a name like "EcoBags Website"
6. Click **"Generate"**
7. Google will show you a 16-character password (example: `abcd efgh ijkl mnop`)
8. **Copy this password immediately** (you won't be able to see it again)

### 3. Update Your Environment Variables

1. Open the file `.env.local` in your project root (`eco-bags/.env.local`)
2. Replace `your_app_password_here` with the 16-character password you just generated
3. Remove all spaces from the password (use just the letters: `abcdefghijklmnop`)

Your `.env.local` should look like this:

```env
EMAIL_USER=balamsanjay2003@gmail.com
EMAIL_APP_PASSWORD=abcdefghijklmnop
EMAIL_RECIPIENT=balamsanjay2003@gmail.com
```

### 4. Restart Your Development Server

After updating `.env.local`:

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
# or
bun run dev
```

### 5. Test the Form

1. Go to http://localhost:3000/custom-orders
2. Fill out the form with test data
3. Click "Submit Custom Order Request"
4. Check your email at `balamsanjay2003@gmail.com`

## Email Format

You will receive an email with:
- **Subject:** New Custom Order Request - [Customer Name] ([Quantity] bags)
- **From:** EcoBags Order System
- **Reply-To:** Customer's email (so you can reply directly)
- **Content:** 
  - Customer Information (Name, Email, Phone, Quantity)
  - Bag Specifications (Paper Type, GSM, Printing, Handles, etc.)
  - Size & Dimensions
  - Additional Requirements

## Troubleshooting

### "Invalid login: 535-5.7.8 Username and Password not accepted"
- Make sure you're using the App Password, NOT your regular Gmail password
- Make sure there are no spaces in the password
- Try generating a new App Password

### "Error sending email: connect ETIMEDOUT"
- Check your internet connection
- Gmail SMTP might be blocked on your network
- Try using port 465 with `secure: true` instead

### Not receiving emails?
- Check your Spam folder
- Verify the email address in `.env.local` is correct
- Check the terminal/console for error messages

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to Git (it's already in .gitignore)
- Never share your App Password
- If you accidentally expose your App Password, delete it immediately from [App Passwords page](https://myaccount.google.com/apppasswords) and generate a new one

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add these environment variables in your hosting dashboard:
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`
   - `EMAIL_RECIPIENT`

2. **Never** include `.env.local` in your deployment

## Alternative: Different Email Provider

If you want to use a different email provider:

1. Update the SMTP settings in `src/app/api/send-order/route.ts`:
   - `host`: Your SMTP server
   - `port`: Usually 587 (TLS) or 465 (SSL)
   - `secure`: true for SSL, false for TLS

Example for other providers:
- **Outlook:** smtp-mail.outlook.com, port 587
- **Yahoo:** smtp.mail.yahoo.com, port 465
- **Custom domain:** Check with your hosting provider

---

**Need help?** The email functionality is fully set up. Just follow the steps above to configure your Gmail App Password!

