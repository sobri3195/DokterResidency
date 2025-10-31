# Deployment Guide - DokterResidency Admin Panel

## 🚀 Deployment ke Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Login ke Netlify**
   - Buka https://app.netlify.com/
   - Login dengan GitHub account Anda

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select repository: `sobri3195/DokterResidency`
   - Choose branch: `feat/admin-panel-dokterresidency-cbt-bank-soal-analytics`

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy!**
   - Click "Deploy site"
   - Wait 2-3 minutes untuk build selesai
   - Site akan live di URL: `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add custom domain: `admin.dokterresidency.com`
   - Follow DNS configuration instructions

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize project
cd /path/to/DokterResidency
netlify init

# Deploy to production
netlify deploy --prod
```

### Option 3: Deploy via Git Push (Continuous Deployment)

Once configured, simply push to your branch:

```bash
git add .
git commit -m "Update admin panel"
git push origin feat/admin-panel-dokterresidency-cbt-bank-soal-analytics
```

Netlify akan otomatis build dan deploy.

## 🔧 Environment Variables

Untuk production, tambahkan environment variables di Netlify Dashboard:

1. Go to Site settings → Environment variables
2. Add variables:
   ```
   VITE_API_URL=https://api.dokterresidency.com
   VITE_APP_ENV=production
   ```

## 🔐 Authentication Setup

### Netlify Identity (Recommended)

1. Enable Netlify Identity:
   - Site settings → Identity → Enable Identity

2. Configure Identity settings:
   - Registration: Invite only
   - External providers: Google, GitHub (optional)
   - Emails: Customize invitation emails

3. Add users:
   - Identity tab → Invite users
   - Enter email addresses
   - Users will receive invitation email

4. Update AuthContext.jsx untuk integrasi:
   ```javascript
   import netlifyIdentity from 'netlify-identity-widget'
   
   netlifyIdentity.init()
   ```

## 📊 Monitoring & Analytics

### Netlify Analytics
- Enable di Site settings → Analytics
- View traffic, performance, dan error logs

### Custom Analytics
- Integrate Google Analytics
- Add tracking ID to environment variables
- Implement in index.html

## ⚡ Performance Optimization

### 1. Enable Netlify CDN
Otomatis aktif untuk semua assets

### 2. Enable Asset Optimization
- Site settings → Build & deploy → Post processing
- Enable:
  - Bundle CSS
  - Minify CSS
  - Minify JS
  - Compress images

### 3. Enable HTTPS
Otomatis aktif dengan SSL certificate gratis

### 4. Enable Caching
Headers sudah dikonfigurasi di netlify.toml

## 🔄 Rollback Deployment

Jika ada masalah:

1. Go to Deploys tab
2. Find previous successful deploy
3. Click "Publish deploy"

## 📝 Post-Deployment Checklist

- [ ] Verify site is live dan accessible
- [ ] Test login functionality
- [ ] Check all pages load correctly
- [ ] Verify responsive design on mobile
- [ ] Test animations dan interactions
- [ ] Check console for errors
- [ ] Verify charts display correctly
- [ ] Test navigation between pages
- [ ] Check Netlify Identity if configured
- [ ] Set up custom domain (if applicable)
- [ ] Enable analytics
- [ ] Configure environment variables
- [ ] Set up notification webhooks (optional)

## 🐛 Troubleshooting

### Build Fails
- Check build logs di Netlify Dashboard
- Verify package.json dependencies
- Ensure Node version compatibility (18+)

### 404 on Page Refresh
- Verify netlify.toml redirects configuration
- Should have `/* → /index.html 200` redirect

### Assets Not Loading
- Check publish directory is set to `dist`
- Verify build command: `npm run build`
- Check console for CORS errors

### Performance Issues
- Enable asset optimization
- Check bundle size: `npm run build`
- Consider code splitting for large chunks

## 📞 Support

For deployment issues:
- Netlify Support: https://answers.netlify.com/
- Documentation: https://docs.netlify.com/

---

**Happy Deploying! 🎉**
