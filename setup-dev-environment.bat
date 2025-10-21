@echo off
echo ========================================
echo    PDF Converter Pro - Dev Setup
echo ========================================
echo.

echo Step 1: Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    echo Download the LTS version (18.x or higher)
    echo Make sure to check "Add to PATH" during installation
    echo.
    echo After installation, restart your computer and run this script again.
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Node.js is installed!
    node --version
)

echo.
echo Step 2: Checking if npm is available...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not available!
    echo Please reinstall Node.js with npm included.
    pause
    exit /b 1
) else (
    echo ✅ npm is available!
    npm --version
)

echo.
echo Step 3: Installing project dependencies...
echo This may take a few minutes...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies!
    echo.
    echo Common solutions:
    echo 1. Check your internet connection
    echo 2. Clear npm cache: npm cache clean --force
    echo 3. Delete node_modules folder and try again
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo Step 4: Running type check...
npm run type-check

if %errorlevel% neq 0 (
    echo ⚠️  Type check found issues, but continuing...
) else (
    echo ✅ Type check passed!
)

echo.
echo Step 5: Starting development server...
echo.
echo 🚀 Your PDF Converter Pro is starting!
echo 📱 Open your browser to: http://localhost:3000
echo 🛑 Press Ctrl+C to stop the server
echo.

npm run dev
