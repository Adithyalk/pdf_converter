# PDF Converter Pro 🚀

A modern, beautiful, and lightning-fast PDF converter built with Next.js, TypeScript, and Tailwind CSS. Convert PDF to DOCX and DOCX to PDF with stunning animations and a delightful user experience.

![PDF Converter Pro](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🔄 **Bidirectional Conversion**: PDF ↔ DOCX conversion
- 🎨 **Beautiful UI**: Modern design with smooth animations
- 📁 **Drag & Drop**: Intuitive file upload interface
- ⚡ **Lightning Fast**: Optimized for speed and performance
- 📱 **Responsive**: Works perfectly on all devices
- 🎭 **Animations**: Framer Motion powered smooth transitions
- 🔒 **Secure**: Client-side processing for privacy
- 📦 **Batch Processing**: Convert multiple files at once

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **File Handling**: React Dropzone
- **PDF Processing**: PDF-lib
- **DOCX Processing**: Mammoth.js & docx
- **Notifications**: React Hot Toast

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adithyalk/pdf_converter.git
   cd pdf_converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Render

### Step 1: Prepare Your Repository

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: PDF Converter Pro"
   git push origin main
   ```

2. **Ensure your repository is public** (required for free Render deployment)

### Step 2: Deploy on Render

1. **Sign up/Login to Render**
   - Go to [render.com](https://render.com)
   - Sign up or login with your GitHub account

2. **Create a New Web Service**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub repository

3. **Configure Build Settings**
   ```
   Name: pdf-converter-pro
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Root Directory: (leave empty)
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Environment Variables**
   - No environment variables needed for basic functionality
   - Add any custom configurations if needed

5. **Deploy**
   - Click "Create Web Service"
   - Wait for the build to complete (5-10 minutes)
   - Your app will be available at `https://pdf-converter-pro.onrender.com`

### Step 3: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your service settings
   - Click "Custom Domains"
   - Add your domain name
   - Follow DNS configuration instructions

## 📁 Project Structure

```
pdf_converter/
├── app/
│   ├── api/
│   │   └── convert/
│   │       └── route.ts          # API endpoint for file conversion
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page component
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Build Configuration

The app is configured for production deployment with:
- Optimized bundle splitting
- Static file serving
- API route optimization
- Webpack configuration for PDF processing libraries

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Use Tailwind utility classes throughout components

### Animations
- Framer Motion animations in `app/page.tsx`
- Custom keyframes in `tailwind.config.js`
- Hover and interaction effects

### Conversion Logic
- Modify `app/api/convert/route.ts` for conversion algorithms
- Add support for more file formats
- Implement advanced PDF text extraction

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Built-in Next.js Image component
- **Bundle Analysis**: Run `npm run build` to analyze bundle size
- **Caching**: API responses are optimized for performance

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails on Render**
   - Check Node.js version (18+ required)
   - Ensure all dependencies are in `package.json`
   - Check build logs for specific errors

2. **File Conversion Not Working**
   - Verify file format is supported
   - Check browser console for errors
   - Ensure file size is within limits

3. **Styling Issues**
   - Clear browser cache
   - Check Tailwind CSS is properly configured
   - Verify PostCSS configuration

### Debug Mode

Enable debug mode by adding to your environment:
```env
DEBUG=true
```

## 📈 Monitoring

### Render Dashboard
- Monitor uptime and performance
- View build logs and deployment history
- Set up alerts for downtime

### Analytics
- Add Google Analytics or similar
- Monitor user interactions
- Track conversion success rates

## 🔒 Security Considerations

- File processing happens client-side for privacy
- No files are stored on servers
- Input validation on all file uploads
- Rate limiting recommended for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [PDF-lib](https://pdf-lib.js.org/) - PDF manipulation
- [Mammoth.js](https://github.com/mwilliamson/mammoth.js) - DOCX processing

## 📞 Support

For support, email support@pdfconverterpro.com or create an issue on GitHub.

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
