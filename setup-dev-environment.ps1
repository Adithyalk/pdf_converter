Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    PDF Converter Pro - Dev Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Checking if Node.js is installed..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed! Version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org" -ForegroundColor Yellow
    Write-Host "Download the LTS version (18.x or higher)" -ForegroundColor Yellow
    Write-Host "Make sure to check 'Add to PATH' during installation" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installation, restart your computer and run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 2: Checking if npm is available..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm is available! Version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available!" -ForegroundColor Red
    Write-Host "Please reinstall Node.js with npm included." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 3: Installing project dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray

try {
    npm install
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Common solutions:" -ForegroundColor Yellow
    Write-Host "1. Check your internet connection" -ForegroundColor Gray
    Write-Host "2. Clear npm cache: npm cache clean --force" -ForegroundColor Gray
    Write-Host "3. Delete node_modules folder and try again" -ForegroundColor Gray
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Step 4: Running type check..." -ForegroundColor Yellow
try {
    npm run type-check
    Write-Host "✅ Type check passed!" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Type check found issues, but continuing..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 5: Starting development server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "🚀 Your PDF Converter Pro is starting!" -ForegroundColor Green
Write-Host "📱 Open your browser to: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🛑 Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

npm run dev
