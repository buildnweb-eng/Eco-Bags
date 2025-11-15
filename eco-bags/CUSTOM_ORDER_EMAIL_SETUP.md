# Custom Order Email System - Quick Start

## ✅ What's Been Set Up

I've implemented a complete email notification system for your custom orders using **Gmail SMTP** (no third-party services needed).

### Files Created/Modified:

1. **API Route:** `src/app/api/send-order/route.ts`
   - Handles form submission
   - Sends beautifully formatted HTML emails
   - Uses Gmail SMTP to send emails

2. **Custom Orders Page:** `src/app/custom-orders/page.tsx`
   - Updated to call the API endpoint
   - Shows success/error messages
   - Resets form after successful submission

3. **Environment File:** `.env.local`
   - Stores your email credentials securely
   - Not committed to Git (already in .gitignore)

4. **Dependencies Added:**
   - `nodemailer` - for sending emails
   - `@types/nodemailer` - TypeScript support

## 🚀 Quick Setup (3 Steps)

### Step 1: Enable 2-Factor Authentication
Go to: https://myaccount.google.com/security
- Enable 2-Step Verification for your Gmail account

### Step 2: Generate App Password
Go to: https://myaccount.google.com/apppasswords
- Select "Mail" and "Other"
- Name it "EcoBags Website"
- **Copy the 16-character password**

### Step 3: Update .env.local
Open `eco-bags/.env.local` and replace:
```
EMAIL_APP_PASSWORD=your_app_password_here
```
With your actual app password (remove spaces):
```
EMAIL_APP_PASSWORD=abcdefghijklmnop
```

### Step 4: Restart Server
```bash
# Ctrl+C to stop, then:
npm run dev
```

## 📧 What You'll Receive

When a customer submits a custom order, you'll receive an email at `balamsanjay2003@gmail.com` with:

**Email Subject:**
```
New Custom Order Request - [Customer Name] ([Quantity] bags)
```

**Email Content Includes:**
- ✅ Customer Information (Name, Email, Phone, Quantity)
- ✅ Bag Specifications (Paper Type, GSM, Printing, Handles, Lamination, Special Treatment)
- ✅ Size & Dimensions (Pre-defined variety or custom size)
- ✅ Additional Requirements
- ✅ Professional HTML formatting with your brand colors
- ✅ Reply-To set to customer's email (easy to respond)

## 🎯 How It Works

```
Customer fills form → Click Submit → API receives data → 
Email sent via Gmail SMTP → You receive email → Customer sees success message
```

## 🧪 Test It

1. Go to: http://localhost:3000/custom-orders
2. Fill out the form with test data
3. Click "Submit Custom Order Request"
4. Check your email!

## ❗ Important Security Notes

- ✅ `.env.local` is already in `.gitignore` (won't be committed)
- ✅ Never share your App Password
- ✅ Use environment variables in production deployment
- ✅ If App Password is exposed, delete it and generate a new one

## 📱 For Production Deployment

When you deploy to Vercel/Netlify/etc:

1. Add these environment variables in your hosting dashboard:
   - `EMAIL_USER=balamsanjay2003@gmail.com`
   - `EMAIL_APP_PASSWORD=your_16_char_password`
   - `EMAIL_RECIPIENT=balamsanjay2003@gmail.com`

2. Your hosting will use these securely

## 🔧 Customization Options

Want to change something? Edit these files:

- **Email template:** `src/app/api/send-order/route.ts` (line 18-82)
- **Recipient email:** `.env.local` → `EMAIL_RECIPIENT`
- **Form validation:** `src/app/custom-orders/page.tsx`

---

## 📖 Full Documentation

See `EMAIL_SETUP_INSTRUCTIONS.md` for detailed setup instructions and troubleshooting.

---

**That's it!** Your custom order emails are ready to go. Just set up your Gmail App Password and test it out! 🎉

