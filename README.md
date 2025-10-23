# Contratação Guiada Demo

Uma aplicação React para demonstração de um acelerador de pontos de cartão de crédito, desenvolvida para webview bancária.

## 🚀 Tecnologias

- **React 19** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lottie React** para animações JSON
- **Vitest** para testes unitários
- **React Testing Library** para testes de componentes

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🧪 Testes

```bash
# Executar testes
npm run test

# Executar testes com cobertura
npm run test:coverage

# Interface de testes
npm run test:ui
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy na Vercel

### Opção 1: Deploy via CLI da Vercel

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. Deploy do projeto:
```bash
vercel
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Importe o repositório
5. A Vercel detectará automaticamente as configurações do Vite

### Opção 3: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── AcceleratorFeature/     # Componentes principais da feature
│   └── shared/                 # Componentes reutilizáveis
├── hooks/                      # Custom hooks
├── test/                       # Configuração de testes
└── assets/                     # Assets estáticos
```

## 🎯 Funcionalidades

- **Tela de Boas-vindas**: Apresenta o acelerador de pontos
- **Simulador**: Calculadora de pontos com entrada de gastos mensais
- **Conversão**: Tela final para ativação do acelerador
- **Navegação**: Fluxo intuitivo entre as telas
- **Animações**: Lottie e Framer Motion para experiência moderna
- **Responsivo**: Design adaptável para diferentes dispositivos

## 🧪 Cobertura de Testes

O projeto possui testes unitários com cobertura mínima de 80%:

- ✅ Hooks customizados
- ✅ Componentes compartilhados
- ✅ Componentes da feature
- ✅ Navegação entre telas
- ✅ Interações do usuário

## 🔧 Configurações

- **Tailwind CSS**: Configurado para design system
- **Vitest**: Configurado para testes com cobertura
- **Vercel**: Configurado para deploy automático
- **TypeScript**: Configuração estrita para melhor DX

## 📱 Webview

A aplicação foi desenvolvida especificamente para webview bancária, com:

- Design otimizado para mobile
- Navegação por gestos
- Performance otimizada
- Integração com APIs bancárias (mockadas)