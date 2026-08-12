# 🚀 Smart Food Project - Quick Start Guide

## ⚡ One-Command Startup (EASIEST)

### **Option 1: Using Batch File (CMD/PowerShell)**
```bash
START_PROJECT.bat
```
Just double-click `START_PROJECT.bat` in the project root folder!

---

### **Option 2: Using PowerShell Script**
```powershell
.\START_PROJECT.ps1
```
Run in PowerShell (right-click folder → Open PowerShell here)

---

## 📋 Manual Startup (If Scripts Don't Work)

### **Terminal 1 - Backend**
```cmd
cd backend\supplier-query-api
mvnw.cmd spring-boot:run
```

### **Terminal 2 - Frontend**
```cmd
cd frontend
npm run dev
```

### **Terminal 3 - Open in Chrome**
```cmd
start chrome "http://localhost:5173/" && start chrome "http://localhost:8080/" && start chrome "http://localhost:8080/h2-console"
```

---

## 🌐 Access URLs

Once running, open these in your browser:

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:5173/ | React/Vite UI |
| **Backend API** | http://localhost:8080/ | Spring Boot API |
| **Database** | http://localhost:8080/h2-console | H2 DB Console |

---

## ✅ What Each Startup Method Does

### **START_PROJECT.bat**
1. ✓ Opens backend in a new CMD window
2. ✓ Waits 5 seconds for backend to initialize
3. ✓ Opens frontend in a new CMD window
4. ✓ Waits 3 seconds for frontend to initialize
5. ✓ Opens 3 Chrome windows/tabs automatically

### **START_PROJECT.ps1**
- Same as .bat but with colored output in PowerShell

### **Manual Startup**
- Full control over each service
- Better for debugging

---

## 🔧 Requirements

- **Java 17+** (for backend)
- **Node.js 18+** (for frontend)
- **Chrome/Chromium** browser
- **Windows** OS

---

## 📊 Project Structure

```
smart food/
├── backend/
│   └── supplier-query-api/        (Spring Boot)
├── frontend/                        (React + Vite)
├── docs/                           (Documentation)
├── START_PROJECT.bat               ← RUN THIS
├── START_PROJECT.ps1               ← OR THIS
└── README.md
```

---

## 🚨 Troubleshooting

### **Port Already in Use**
If port 8080 or 5173 is already in use:
1. Find the process: `netstat -ano | findstr :8080`
2. Kill it: `taskkill /PID <PID> /F`
3. Restart the project

### **Java Not Found**
```cmd
java -version
```
If error, install Java 17 from oracle.com

### **Node Not Found**
```cmd
node -v
```
If error, install Node.js from nodejs.org

### **npm Dependencies Issue**
```cmd
cd frontend
npm install
npm run dev
```

### **Backend Build Failed**
```cmd
cd backend/supplier-query-api
mvnw.cmd clean package -DskipTests
mvnw.cmd spring-boot:run
```

---

## 📝 Log Output

### Backend will show:
```
Started SupplierQueryApplication in X seconds
Tomcat started on port 8080
```

### Frontend will show:
```
VITE v8.2.1  ready in XXX ms
➜  Local:   http://localhost:5173/
```

---

## 🎯 First Time Setup

1. **Download Project** ✓
2. **Install Dependencies**
   ```cmd
   cd frontend && npm install
   ```
3. **Run START_PROJECT.bat** ✓
4. Wait 10-15 seconds for everything to load
5. Chrome windows open automatically ✓

---

## 💡 Tips

- Keep browser DevTools open for debugging
- Backend logs appear in first CMD window
- Frontend logs appear in second CMD window
- Database console at http://localhost:8080/h2-console

---

## 🔴 Stopping Services

### **From Scripts**
- Close the CMD windows that opened
- Press `Ctrl+C` in each terminal

### **Alternative - Kill Processes**
```cmd
taskkill /IM java.exe /F
taskkill /IM node.exe /F
```

---

**Ready to go! 🎉 Just run `START_PROJECT.bat` and you're done!**
