# 🚀 Deployment Guide - PDF Converter Pro

This guide will walk you through deploying your PDF Converter Pro application to Render.

## 📋 Prerequisites

- GitHub account
- Render account (free tier available)
- Node.js 18+ installed locally
- Git installed

## 🎯 Quick Deployment Steps

### 1. Prepare Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: PDF Converter Pro"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/pdf-converter-pro.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Render

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Sign up/Login with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository with your PDF converter

3. **Configure Service Settings**
   ```
   Name: pdf-converter-pro
   Environment: Node
   Region: Oregon (US West) or Frankfurt (EU)
   Branch: main
   Root Directory: (leave empty)
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Advanced Settings**
   - **Auto-Deploy**: Yes (deploys on every push)
   - **Health Check Path**: `/`
   - **Environment**: Production

5. **Deploy**
   - Click "Create Web Service"
   - Wait for build to complete (5-10 minutes)
   - Your app will be live at `https://pdf-converter-pro.onrender.com`

## 🔧 Environment Configuration

### Required Environment Variables
No environment variables are required for basic functionality.

### Optional Environment Variables
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-app.onrender.com
```

## 📊 Monitoring Your Deployment

### Render Dashboard
- **Overview**: Monitor uptime and performance
- **Logs**: View real-time application logs
- **Metrics**: CPU, memory, and response time
- **Deployments**: Track deployment history

### Health Checks
- Render automatically checks your app at the root path `/`
- Ensure your app responds to GET requests at `/`

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build logs in Render dashboard
# Common causes:
- Node.js version mismatch
- Missing dependencies
- TypeScript errors
```

**Solution:**
```bash
# Update package.json engines
"engines": {
  "node": ">=18.0.0",
  "npm": ">=8.0.0"
}
```

#### Runtime Errors
```bash
# Check application logs
# Common causes:
- Memory limits exceeded
- File size limits
- API route errors
```

**Solution:**
- Upgrade to paid plan for more resources
- Optimize file processing
- Add error handling

#### Slow Performance
```bash
# Monitor metrics in dashboard
# Common causes:
- Cold starts (free tier)
- Large bundle size
- Inefficient processing
```

**Solution:**
- Use paid plan for better performance
- Optimize bundle size
- Implement caching

### Debug Commands

```bash
# Check build locally
npm run build

# Test production build
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 🔄 Continuous Deployment

### Automatic Deployments
- Every push to `main` branch triggers deployment
- Pull requests can be previewed (paid plans)
- Rollback to previous deployments anytime

### Manual Deployments
1. Go to Render dashboard
2. Select your service
3. Click "Manual Deploy"
4. Choose branch/commit
5. Deploy

## 📈 Scaling Your Application

### Free Tier Limits
- 750 hours/month
- 512MB RAM
- Sleeps after 15 minutes of inactivity
- 100GB bandwidth/month

### Paid Plans
- Always-on instances
- More RAM and CPU
- Custom domains
- Team collaboration
- Priority support

## 🔒 Security Best Practices

### Environment Security
- Never commit `.env` files
- Use Render's environment variable system
- Rotate secrets regularly

### Application Security
- Validate all file uploads
- Implement rate limiting
- Use HTTPS (automatic on Render)
- Regular dependency updates

## 📱 Custom Domain Setup

1. **Add Domain in Render**
   - Go to service settings
   - Click "Custom Domains"
   - Add your domain

2. **Configure DNS**
   ```
   Type: CNAME
   Name: www
   Value: your-app.onrender.com
   
   Type: A
   Name: @
   Value: [Render IP]
   ```

3. **SSL Certificate**
   - Automatically provisioned by Render
   - Validates within 24 hours

## 📊 Performance Optimization

### Bundle Optimization
```bash
# Analyze bundle size
npm run build:analyze

# Optimize images
# Use Next.js Image component
# Implement lazy loading
```

### Caching Strategy
- Static assets cached by CDN
- API responses can be cached
- Implement client-side caching

### Monitoring
- Set up alerts for downtime
- Monitor response times
- Track error rates
- Monitor resource usage

## 🆘 Support

### Render Support
- Documentation: [render.com/docs](https://render.com/docs)
- Community: [community.render.com](https://community.render.com)
- Support: Available on paid plans

### Application Support
- Check logs in Render dashboard
- Test locally first
- Use browser dev tools
- Check network tab for API errors

## 🎉 Success!

Your PDF Converter Pro is now live! Share your app with the world:

- **Live URL**: `https://your-app.onrender.com`
- **GitHub**: `https://github.com/yourusername/pdf-converter-pro`
- **Documentation**: Include in your README

---

**Happy Deploying! 🚀**
