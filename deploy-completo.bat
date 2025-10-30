@echo off
cd %~dp0
echo ===============================
echo 🚀 Iniciando deploy IA Renda Automática
echo ===============================
echo.

git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  O Git não está instalado.
    echo Baixe em https://git-scm.com/download/win
    pause
    exit /b
)

git add .
set datetime=%date%_%time%
git commit -m "Atualização automática - %datetime%"
git push -u origin main

echo.
echo ✅ Deploy completo enviado com sucesso!
echo 🌍 Aguarde alguns segundos e confira na Vercel.
echo.
pause
