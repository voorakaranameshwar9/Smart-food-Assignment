#!/usr/bin/env pwsh
# ========================================
# Smart Food Project - Complete Startup
# ========================================
# Run this in PowerShell to start everything

Write-Host "`n"
Write-Host "========================================" -ForegroundColor Green
Write-Host "  SMART FOOD PROJECT - FULL EXECUTION" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "`n"

# Get project directories
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendDir = Join-Path $projectRoot "backend/supplier-query-api"
$frontendDir = Join-Path $projectRoot "frontend"

Write-Host "[1/3] Launching Backend Server (Spring Boot)..." -ForegroundColor Cyan
Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "cd /d `"$backendDir`" && mvnw.cmd spring-boot:run" -WindowStyle Normal

Write-Host "      Waiting for backend to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "[2/3] Launching Frontend Server (React/Vite)..." -ForegroundColor Cyan
Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "cd /d `"$frontendDir`" && npm run dev" -WindowStyle Normal

Write-Host "      Waiting for frontend to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host "[3/3] Opening Chrome..." -ForegroundColor Cyan
Start-Sleep -Seconds 2

# Open all URLs in Chrome
@(
    "http://localhost:5173/",
    "http://localhost:8080/",
    "http://localhost:8080/h2-console"
) | ForEach-Object {
    Start-Process "chrome" $_
    Start-Sleep -Seconds 1
}

Write-Host "`n"
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✓ PROJECT STARTED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "`n"

Write-Host "URLs:" -ForegroundColor Yellow
Write-Host "  Frontend App: http://localhost:5173/" -ForegroundColor Cyan
Write-Host "  Backend API:  http://localhost:8080/" -ForegroundColor Cyan
Write-Host "  Database:     http://localhost:8080/h2-console" -ForegroundColor Cyan

Write-Host "`n"
Write-Host "Press Ctrl+C to stop all services..." -ForegroundColor Gray
Write-Host "`n"
