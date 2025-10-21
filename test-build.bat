@echo off
echo ========================================
echo    PDF Converter Pro - Build Test
echo ========================================
echo.

echo Testing if the code is ready for deployment...
echo.

echo 1. Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found! Install from https://nodejs.org
    pause
    exit /b 1
) else (
    echo ✅ Node.js found
)

echo.
echo 2. Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not found! Reinstall Node.js
    pause
    exit /b 1
) else (
    echo ✅ npm found
)

echo.
echo 3. Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
) else (
    echo ✅ Dependencies installed
)

echo.
echo 4. Running TypeScript check...
npm run type-check
if %errorlevel% neq 0 (
    echo ❌ TypeScript errors found!
    echo Check the errors above and fix them before deploying.
    pause
    exit /b 1
) else (
    echo ✅ TypeScript check passed
)

echo.
echo 5. Running linter...
npm run lint
if %errorlevel% neq 0 (
    echo ⚠️  Linting issues found, but continuing...
) else (
    echo ✅ Linting passed
)

echo.
echo 6. Building the application...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    echo Check the errors above and fix them before deploying.
    pause
    exit /b 1
) else (
    echo ✅ Build successful!
)

echo.
echo ========================================
echo    🎉 CODE IS READY FOR DEPLOYMENT! 🎉
echo ========================================
echo.
echo All checks passed:
echo ✅ Node.js and npm working
echo ✅ Dependencies installed
echo ✅ TypeScript check passed
echo ✅ Build successful
echo.
echo You can now deploy to Render with confidence!
echo.
pause
