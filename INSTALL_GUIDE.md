# 🚀 PDF Converter Pro - Complete Installation Guide

## ⚡ Quick Setup (5 minutes)

### Step 1: Install Node.js
1. **Download Node.js**: Go to [https://nodejs.org](https://nodejs.org)
2. **Choose LTS Version**: Download the version marked "LTS" (18.x or higher)
3. **Run Installer**: Double-click the downloaded `.msi` file
4. **Important**: Check "Add to PATH" during installation
5. **Restart Computer**: This is crucial for PATH to work

### Step 2: Verify Installation
Open a **new** Command Prompt and run:
```bash
node --version
npm --version
```
You should see version numbers (not errors).

### Step 3: Run the App
Navigate to your project folder and run:
```bash
cd C:\Users\Gameing\Desktop\pdf_converter
setup-dev-environment.bat
```

## 🔧 Alternative: Manual Setup

If the batch file doesn't work, run these commands one by one:

```bash
# 1. Install dependencies
npm install

# 2. Check for errors
npm run type-check

# 3. Start development server
npm run dev
```

## 🌐 Access Your App

Once running, open your browser to:
**http://localhost:3000**

## 🧪 Test Features

1. **Drag & Drop**: Try dragging a PDF or DOCX file
2. **Conversion**: Click "Convert Files" button
3. **Animations**: Notice smooth hover effects
4. **Mobile**: Try resizing the window

## 🚨 Troubleshooting

### "npm is not recognized"
- **Solution**: Restart your computer after installing Node.js
- **Alternative**: Use full path: `C:\Program Files\nodejs\npm.exe install`

### "Permission denied"
- **Solution**: Run Command Prompt as Administrator
- **Alternative**: Use PowerShell

### "Port 3000 already in use"
- **Solution**: Kill the process: `taskkill /f /im node.exe`
- **Alternative**: Use different port: `npm run dev -- -p 3001`

## 📱 What You'll See

Your PDF Converter Pro will have:
- ✅ Beautiful gradient background
- ✅ Drag & drop file upload area
- ✅ PDF ↔ DOCX conversion buttons
- ✅ Smooth animations and hover effects
- ✅ Responsive design for all devices

## 🚀 Deploy to Render

Once local testing works:
1. Push to GitHub: `git push origin main`
2. Go to [render.com](https://render.com)
3. Connect your repository
4. Deploy with these settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

## 📞 Need Help?

If you encounter any issues:
1. Check the error messages carefully
2. Make sure Node.js is properly installed
3. Restart your computer after installation
4. Try running Command Prompt as Administrator

---

**Your PDF Converter Pro is ready to go! 🎉**
