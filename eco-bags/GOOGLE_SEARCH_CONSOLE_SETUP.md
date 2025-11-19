# Google Search Console Setup Guide

## 🎯 Quick Setup Steps for EcoBagsFactory

### Step 1: Verify Your Website

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Your Property**
   - Click "Add Property"
   - Select "URL prefix"
   - Enter: `https://ecobagsfactory.org`
   - Click "Continue"

3. **Verification Method - HTML Tag (Recommended)**
   - Choose "HTML tag" method
   - Copy the meta tag code (looks like this):
     ```html
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     ```
   
4. **Add Verification Code**
   - Open your project
   - Go to: `src/app/layout.tsx`
   - Find line 64 (in the metadata section)
   - Replace `"your-google-verification-code"` with your actual code
   - Example:
     ```typescript
     verification: {
       google: "abc123XYZ789", // Replace with your actual code
     },
     ```

5. **Deploy Your Changes**
   ```bash
   # Commit and push to GitHub
   git add .
   git commit -m "Add Google Search Console verification"
   git push
   ```
   - Vercel will automatically redeploy your site

6. **Verify in Google Search Console**
   - Wait 1-2 minutes for deployment
   - Go back to Search Console
   - Click "Verify"
   - You should see: "Ownership verified" ✅

---

### Step 2: Submit Your Sitemap

1. **In Google Search Console Dashboard**
   - Click on "Sitemaps" in the left sidebar

2. **Add New Sitemap**
   - Enter: `sitemap.xml`
   - Click "Submit"

3. **Verify Submission**
   - Status should change to "Success"
   - Google will start crawling your pages within 24-48 hours

---

### Step 3: Initial Configuration

#### Enable Email Notifications
1. Go to "Settings" (gear icon)
2. Click "Users and permissions"
3. Ensure your email is added
4. Enable notifications for:
   - Critical issues
   - Manual actions
   - Index coverage issues

#### Request Indexing for Key Pages
1. Use the URL Inspection tool (top search bar)
2. Enter each important URL:
   - `https://ecobagsfactory.org/`
   - `https://ecobagsfactory.org/products`
   - `https://ecobagsfactory.org/custom-orders`
   - `https://ecobagsfactory.org/contact`
3. Click "Request Indexing" for each page
4. This speeds up the initial indexing process

---

### Step 4: Link Google Analytics (Optional but Recommended)

1. **Create Google Analytics Account**
   - Visit: https://analytics.google.com
   - Create a new property for your website
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to Your Website**
   - Install the package:
     ```bash
     npm install @next/third-parties
     ```
   
   - Add to `src/app/layout.tsx`:
     ```typescript
     import { GoogleAnalytics } from '@next/third-parties/google'
     
     // In your layout return, add before </body>:
     <GoogleAnalytics gaId="G-XXXXXXXXXX" />
     ```

3. **Link in Search Console**
   - Go to Search Console Settings
   - Click "Associate"
   - Select your Google Analytics property
   - Confirm association

---

## 📊 What to Monitor (First Week)

### Coverage Report
- **Check**: Number of pages indexed
- **Expected**: 6-7 pages (Home, About, Products, Custom Orders, Gallery, Contact)
- **Action**: If pages aren't indexed, request indexing manually

### Performance Report
- **Check**: Impressions and clicks
- **Expected**: Low initially, will grow
- **Action**: Note which keywords are getting impressions

### Mobile Usability
- **Check**: Mobile-friendly status
- **Expected**: No issues (your site is mobile-responsive)
- **Action**: Fix any reported issues

### Core Web Vitals
- **Check**: Page experience metrics
- **Expected**: Good scores (Next.js optimized)
- **Action**: Optimize if any pages show "Needs Improvement"

---

## 🔍 Important URLs to Track

Add these URLs to a monitoring list:

```
Homepage:       https://ecobagsfactory.org/
About:          https://ecobagsfactory.org/about
Products:       https://ecobagsfactory.org/products
Custom Orders:  https://ecobagsfactory.org/custom-orders
Gallery:        https://ecobagsfactory.org/gallery
Contact:        https://ecobagsfactory.org/contact
```

---

## 🎯 Target Keywords to Monitor

Set up these keywords in your tracking:

### Primary (High Priority)
- eco-friendly paper bags
- paper bags manufacturer Hyderabad
- sustainable packaging
- custom paper bags

### Secondary
- kraft paper bags
- recyclable bags
- biodegradable bags
- paper bags India

### Local
- paper bags Hyderabad
- paper bags Kukatpally
- packaging supplier Hyderabad

---

## 📱 Google Business Profile Setup

This is crucial for local SEO in Hyderabad!

1. **Create/Claim Profile**
   - Visit: https://business.google.com
   - Search for "Eco Bag Factory" or your business name
   - If exists, claim it
   - If not, create new profile

2. **Essential Information**
   ```
   Business Name: EcoBagsFactory
   Category: Packaging Supplies, Manufacturer
   Address: Plot No. 91, Rajiv Gandhi Nagar, 
            Prashanthi Nagar, Kukatpally, 
            Hyderabad - 500072
   Phone: +91 9949826222
   Website: https://ecobagsfactory.org
   Hours: Monday-Saturday: 9AM-7PM, Sunday: Closed
   ```

3. **Add Photos**
   - Logo
   - Product photos (use images from your website)
   - Factory/office photos
   - Team photos (if available)

4. **Write Description**
   ```
   Leading manufacturer of eco-friendly, 100% recyclable paper bags 
   in Hyderabad. We specialize in custom printed paper bags, kraft 
   bags, and sustainable packaging solutions for businesses of all 
   sizes. Premium quality, competitive pricing, and fast delivery.
   ```

5. **Services**
   - Custom Paper Bags
   - Kraft Paper Bags
   - Printed Shopping Bags
   - Gift Bags
   - Bulk Orders
   - Custom Printing

---

## 🚨 Common Issues & Solutions

### Issue: "URL is not on Google"
**Solution**: Request indexing manually via URL Inspection tool

### Issue: "Sitemap couldn't be read"
**Solution**: Check that `https://ecobagsfactory.org/sitemap.xml` is accessible

### Issue: "Duplicate title tags"
**Solution**: Already handled! Each page has unique titles

### Issue: "Missing alt attributes"
**Solution**: Already handled! All images have descriptive alt tags

---

## 📈 Expected Timeline

### Week 1
- ✅ Verification complete
- ✅ Sitemap submitted
- 🔄 Initial crawling begins

### Week 2
- 📊 First data appears in reports
- 🔍 Some pages indexed

### Week 3-4
- 📈 All pages indexed
- 👀 Initial impressions in search

### Month 2
- 🎯 Ranking for brand name
- 📊 Regular organic traffic begins

### Month 3+
- 🚀 Rankings improve for keywords
- 💼 Steady organic traffic growth

---

## ✅ Verification Checklist

Before considering setup complete, check:

- [ ] Google Search Console verified
- [ ] Sitemap submitted and processed
- [ ] All main pages indexed
- [ ] No critical errors in Coverage report
- [ ] Mobile usability - all pages pass
- [ ] Core Web Vitals - all green
- [ ] Google Analytics linked (optional)
- [ ] Google Business Profile created/claimed
- [ ] Email notifications enabled

---

## 📞 Need Help?

### Official Resources
- Search Console Help: https://support.google.com/webmasters
- SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide

### Quick Contact Info
Website: https://ecobagsfactory.org
Email: eco4bags@gmail.com
Phone: +91 9949826222

---

*Pro Tip: Set a calendar reminder to check Search Console weekly for the first month, then monthly after that!*

**Good luck with your SEO journey! 🚀**

