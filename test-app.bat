@echo off
echo ========================================
echo    PDF Converter Pro - Quick Test
echo ========================================
echo.

echo Testing if the app can start...
echo.

echo 1. Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js not found! Please install Node.js first.
    pause
    exit /b 1
)

echo.
echo 2. Checking npm...
npm --version
if %errorlevel% neq 0 (
    echo ❌ npm not found! Please install Node.js with npm.
    pause
    exit /b 1
)

echo.
echo 3. Checking if dependencies are installed...
if not exist "node_modules" (
    echo ❌ Dependencies not installed! Run setup-dev-environment.bat first.
    pause
    exit /b 1
)

echo ✅ Dependencies found!

echo.
echo 4. Running type check...
npm run type-check
if %errorlevel% neq 0 (
    echo ⚠️  Type check failed, but continuing...
) else (
    echo ✅ Type check passed!
)

echo.
echo 5. Building the app...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Check the errors above.
    pause
    exit /b 1
)

echo ✅ Build successful!

echo.
echo 6. Starting development server...
echo.
echo 🚀 PDF Converter Pro is ready!
echo 📱 Open: http://localhost:3000
echo 🛑 Press Ctrl+C to stop
echo.

npm run dev
