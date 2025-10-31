# Quick Start Guide 🚀

Get DokterResidency Admin Panel running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/sobri3195/DokterResidency.git
cd DokterResidency

# 2. Switch to the feature branch
git checkout feat/admin-panel-dokterresidency-cbt-bank-soal-analytics

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The application will open automatically at `http://localhost:3000`

## First Login

Use demo credentials:

```
Email: admin@dokterresidency.id
Password: (any password)
Role: Admin
```

Or use any email/password combination - the demo mode will accept anything!

## Explore Features

### 1. Dashboard (/)
- View statistics and analytics
- Check recent activities
- Quick actions

### 2. Bank Soal (/bank-soal)
- Browse 5 sample questions
- Try search and filters
- Click action buttons (View, Edit, Delete)

### 3. Exam Builder (/exam-builder)
- See blueprint management features
- Understand exam creation workflow

### 4. Analytics (/analytics)
- View performance charts
- Check quality metrics
- Understand EBM standards

### 5. Review & Validation (/review)
- See review queue
- Check validation checklist

### 6. User Management (/users)
- View user table
- Understand roles & permissions

### 7. AI Generator (/ai-generator)
- Fill generation form
- Try the generation process
- See success animation

### 8. Notifications (/notifications)
- Check notification list
- Try marking as read
- Delete notifications

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Deploy to Netlify

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sobri3195/DokterResidency)

### Manual Deploy

1. Build the project: `npm run build`
2. Login to Netlify: `netlify login`
3. Deploy: `netlify deploy --prod`

Or follow detailed steps in [DEPLOYMENT.md](DEPLOYMENT.md)

## Common Issues

### Port already in use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Or change port in vite.config.js
```

### Dependencies error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Check Node version
node --version  # Should be 18+

# Update dependencies
npm update
```

## Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   │   └── Layout.jsx   # Main layout with sidebar
│   ├── contexts/        # React contexts
│   │   └── AuthContext.jsx
│   ├── pages/           # Application pages
│   │   ├── Dashboard.jsx
│   │   ├── BankSoal.jsx
│   │   ├── ExamBuilder.jsx
│   │   ├── Analytics.jsx
│   │   ├── ReviewValidation.jsx
│   │   ├── UserManagement.jsx
│   │   ├── AIGenerator.jsx
│   │   ├── Notifications.jsx
│   │   └── Login.jsx
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── netlify.toml         # Netlify config
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **React Router** - Routing
- **Framer Motion** - Animations
- **Recharts** - Charts
- **Lucide React** - Icons

## Next Steps

1. **Customize**: Update colors in `src/index.css`
2. **Add Features**: Create new pages in `src/pages/`
3. **Integrate API**: Replace mock data with real API calls
4. **Deploy**: Push to production on Netlify

## Need Help?

- 📖 Read [README.md](README.md) for overview
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment
- ✨ See [FEATURES.md](FEATURES.md) for features
- 📝 Review [CHANGELOG.md](CHANGELOG.md) for updates

## Development Tips

### Hot Module Replacement (HMR)
Vite supports HMR - changes will reflect instantly without page reload.

### React DevTools
Install React DevTools browser extension for debugging.

### Framer Motion DevTools
Use Framer Motion DevTools to visualize animations.

### Console Errors
Watch browser console for errors and warnings.

## Happy Coding! 🎉

Built with ❤️ for Indonesian Medical Residents
