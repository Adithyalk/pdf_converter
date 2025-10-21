@echo off
echo ========================================
echo    PDF Converter Pro - Setup Check
echo ========================================
echo.

echo Checking system requirements...
echo.

echo 1. Node.js installation:
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo    ❌ Node.js not found
    echo    📥 Install from: https://nodejs.org
) else (
    echo    ✅ Node.js installed
    node --version
)

echo.
echo 2. npm availability:
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo    ❌ npm not found
    echo    📥 Reinstall Node.js with npm
) else (
    echo    ✅ npm available
    npm --version
)

echo.
echo 3. Project files:
if exist "package.json" (
    echo    ✅ package.json found
) else (
    echo    ❌ package.json missing
)

if exist "app\page.tsx" (
    echo    ✅ Main app file found
) else (
    echo    ❌ Main app file missing
)

echo.
echo 4. Dependencies:
if exist "node_modules" (
    echo    ✅ Dependencies installed
) else (
    echo    ❌ Dependencies not installed
    echo    📦 Run: npm install
)

echo.
echo 5. TypeScript check:
if exist "node_modules" (
    npm run type-check >nul 2>&1
    if %errorlevel% neq 0 (
        echo    ⚠️  TypeScript issues found
    ) else (
        echo    ✅ TypeScript check passed
    )
) else (
    echo    ⏭️  Skipped (dependencies not installed)
)

echo.
echo ========================================
echo    Setup Status Summary
echo ========================================
echo.

node --version >nul 2>&1
if %errorlevel% equ 0 (
    npm --version >nul 2>&1
    if %errorlevel% equ 0 (
        if exist "node_modules" (
            echo ✅ READY TO RUN!
            echo.
            echo To start the app, run:
            echo    QUICK_START.bat
            echo.
            echo Or manually:
            echo    npm run dev
        ) else (
            echo ⚠️  ALMOST READY!
            echo.
            echo Install dependencies:
            echo    npm install
            echo.
            echo Then run:
            echo    QUICK_START.bat
        )
    ) else (
        echo ❌ NEEDS NPM!
        echo.
        echo Reinstall Node.js with npm included.
    )
) else (
    echo ❌ NEEDS NODE.JS!
    echo.
    echo Install Node.js from: https://nodejs.org
)

echo.
pause
