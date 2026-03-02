# Contact Form Setup Guide

The contact form sends emails to `nicolas@driveleadmedia.com` using Gmail's SMTP service.

## Setup Instructions

### 1. Generate a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Scroll down to **App passwords** (under "How you sign in to Google")
5. Click **App passwords**
6. Select:
   - App: **Mail**
   - Device: **Other** (enter "Drive Lead Media Website")
7. Click **Generate**
8. Copy the 16-character app password (it will look like: `abcd efgh ijkl mnop`)

### 2. Update Environment Variables

1. Open `.env.local` in the project root
2. Update these values:
   ```bash
   GMAIL_USER=nicolas@driveleadmedia.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```
3. **Important:** Remove all spaces from the app password

### 3. Restart the Development Server

```bash
npm run dev
```

## Testing the Form

1. Navigate to `/contact` on your website
2. Fill out all required fields
3. Submit the form
4. Check `nicolas@driveleadmedia.com` for the email

## How It Works

1. User fills out the contact form
2. Form data is sent to `/api/contact` API route
3. API route uses nodemailer to send email via Gmail SMTP
4. Email is delivered to `nicolas@driveleadmedia.com`
5. Meta Pixel and Google Analytics tracking events fire on successful submission

## Troubleshooting

### Email not sending?

1. **Check environment variables are set correctly**
   - Make sure `.env.local` has both `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Restart dev server after changing env variables

2. **Check Gmail App Password is valid**
   - Must be 16 characters
   - No spaces
   - Generated from Google Account > Security > App passwords

3. **Check 2-Factor Authentication is enabled**
   - App passwords only work with 2FA enabled

4. **Check server logs**
   - Look for error messages in the terminal where you ran `npm run dev`

### Form shows error message?

- Check browser console for errors
- Check network tab to see API response
- Verify all required fields are filled

## Security Notes

- Never commit `.env.local` to git (it's in `.gitignore`)
- App passwords are safer than using your actual Gmail password
- Each app password can be revoked independently from Google Account settings
