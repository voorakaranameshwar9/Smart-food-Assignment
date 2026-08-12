@echo off
REM ========================================
REM Smart Food Project - Complete Startup
REM ========================================
REM This script starts both Backend and Frontend
REM and opens them in Chrome

setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo ========================================
echo   SMART FOOD PROJECT - FULL EXECUTION
echo ========================================
echo.
echo Starting Backend (Spring Boot)...
echo Starting Frontend (React/Vite)...
echo.

REM Get the project root directory
set PROJECT_ROOT=%~dp0
set BACKEND_DIR=%PROJECT_ROOT%backend\supplier-query-api
set FRONTEND_DIR=%PROJECT_ROOT%frontend

REM Start Backend in a new terminal
echo [1/3] Launching Backend Server...
start "Backend - Smart Food API" cmd /k "cd /d %BACKEND_DIR% && mvnw.cmd spring-boot:run"

REM Wait for backend to start
timeout /t 5 /nobreak

REM Start Frontend in a new terminal
echo [2/3] Launching Frontend Server...
start "Frontend - Smart Food App" cmd /k "cd /d %FRONTEND_DIR% && npm run dev"

REM Wait for frontend to start
timeout /t 3 /nobreak

REM Open Chrome with all URLs
echo [3/3] Opening Chrome...
echo.

timeout /t 2 /nobreak

start chrome "http://localhost:5173/"
timeout /t 1 /nobreak
start chrome "http://localhost:8080/"
timeout /t 1 /nobreak
start chrome "http://localhost:8080/h2-console"

echo.
echo ========================================
echo   ✓ PROJECT STARTED SUCCESSFULLY!
echo ========================================
echo.
echo URLs:
echo   Frontend App: http://localhost:5173/
echo   Backend API:  http://localhost:8080/
echo   Database:     http://localhost:8080/h2-console
echo.
echo Press any key to continue...
timeout /t 5 /nobreak

exit /b 0
