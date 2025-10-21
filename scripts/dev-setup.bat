@echo off
echo 🚀 Setting up PDF Converter Pro for development...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Type check
echo 🔍 Running type check...
npm run type-check

if %errorlevel% neq 0 (
    echo ⚠️  Type check failed, but continuing...
)

REM Lint check
echo 🧹 Running linter...
npm run lint

if %errorlevel% neq 0 (
    echo ⚠️  Linting issues found, but continuing...
)

echo.
echo 🎉 Setup complete! You can now run:
echo    npm run dev    - Start development server
echo    npm run build  - Build for production
echo    npm start      - Start production server
echo.
echo 🌐 Your app will be available at: http://localhost:3000
echo.
echo 📚 For deployment instructions, see README.md
pause
