@echo off
echo ========================================
echo    PDF Converter Pro - Setup Script
echo ========================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    echo Download the LTS version and run the installer.
    echo Make sure to check "Add to PATH" during installation.
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Node.js is installed!
    node --version
)

echo.
echo Checking if npm is available...
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
echo Installing project dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo Starting development server...
echo Your app will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
