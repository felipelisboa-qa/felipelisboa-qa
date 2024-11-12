@echo off

:: Criação da estrutura de pastas
mkdir cypress\e2e\auth
mkdir cypress\e2e\modals
mkdir cypress\e2e\user-management
mkdir cypress\e2e\products
mkdir cypress\fixtures
mkdir cypress\support\pageObjects
mkdir cypress\plugins

:: Criação dos arquivos
type nul > cypress\fixtures\users.json
type nul > cypress\fixtures\products.json
type nul > cypress\fixtures\config.json
type nul > cypress\support\commands.js
type nul > cypress\support\e2e.js
type nul > cypress\support\pageObjects\LoginPage.js
type nul > cypress\support\pageObjects\ProductPage.js
type nul > cypress\plugins\index.js

:: Mensagem de conclusão
echo Estrutura de pastas e arquivos criada com sucesso!
