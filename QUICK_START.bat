@echo off
title PDF Converter Pro - Quick Start
color 0A

echo.
echo  ██████╗ ██████╗ ███████╗    ██████╗ ██████╗ ███╗   ██╗██╗   ██╗███████╗████████╗███████╗██████╗ 
echo ██╔══██╗██╔═══██╗██╔════╝   ██╔════╝██╔═══██╗████╗  ██║██║   ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
echo ██████╔╝██║   ██║█████╗     ██║     ██║   ██║██╔██╗ ██║██║   ██║███████╗   ██║   █████╗  ██████╔╝
echo ██╔═══╝ ██║   ██║██╔══╝     ██║     ██║   ██║██║╚██╗██║██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
echo ██║     ╚██████╔╝███████╗   ╚██████╗╚██████╔╝██║ ╚████║╚██████╔╝███████║   ██║   ███████╗██║  ██║
echo ╚═╝      ╚═════╝ ╚══════╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
echo.
echo                            🚀 PDF Converter Pro - Quick Start 🚀
echo.

echo Checking system requirements...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo 📥 Please install Node.js first:
    echo    1. Go to: https://nodejs.org
    echo    2. Download LTS version (18.x or higher)
    echo    3. Run installer and check "Add to PATH"
    echo    4. Restart your computer
    echo    5. Run this script again
    echo.
    echo Press any key to open Node.js download page...
    pause >nul
    start https://nodejs.org
    exit /b 1
) else (
    echo ✅ Node.js found!
    node --version
)

echo.
echo Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not found! Please reinstall Node.js.
    pause
    exit /b 1
) else (
    echo ✅ npm found!
    npm --version
)

echo.
echo Installing dependencies...
echo This may take a few minutes...
echo.

npm install
if %errorlevel% neq 0 (
    echo ❌ Installation failed!
    echo.
    echo Try these solutions:
    echo 1. Check internet connection
    echo 2. Run as Administrator
    echo 3. Clear npm cache: npm cache clean --force
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.

echo Running type check...
npm run type-check
if %errorlevel% neq 0 (
    echo ⚠️  Type check issues found, but continuing...
) else (
    echo ✅ Type check passed!
)

echo.
echo 🚀 Starting PDF Converter Pro...
echo.
echo 📱 Your app will open at: http://localhost:3000
echo 🛑 Press Ctrl+C to stop the server
echo.

timeout /t 2 >nul
start chrome http://localhost:3000

npm run dev
