# 🚀 Guia de Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel. Siga as instruções abaixo:

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Projeto no GitHub (recomendado) ou GitLab
- Node.js 18+ instalado

## 🚀 Opções de Deploy

### Opção 1: Deploy via GitHub (Recomendado)

1. **Faça push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: configuração para deploy na Vercel"
   git push origin main
   ```

2. **Conecte na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte sua conta GitHub
   - Selecione este repositório
   - A Vercel detectará automaticamente as configurações do Vite

3. **Deploy automático:**
   - A Vercel fará o build automaticamente
   - Cada push na branch main fará um novo deploy
   - Você receberá uma URL única para acessar a aplicação

### Opção 2: Deploy via CLI

1. **Instale a Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy do projeto:**
   ```bash
   vercel
   ```

4. **Deploy em produção:**
   ```bash
   vercel --prod
   ```

### Opção 3: Deploy via npx (sem instalação global)

```bash
npx vercel --prod
```

## ⚙️ Configurações do Projeto

O projeto já está configurado com:

- **Framework**: Vite (detectado automaticamente)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (padrão da Vercel)

## 📁 Arquivos de Configuração

- `vercel.json`: Configurações específicas da Vercel
- `.vercelignore`: Arquivos ignorados no deploy
- `package.json`: Scripts e dependências

## 🔧 Configurações Avançadas

### Variáveis de Ambiente

Se precisar configurar variáveis de ambiente:

1. No dashboard da Vercel, vá em Settings > Environment Variables
2. Adicione as variáveis necessárias:
   - `NODE_ENV=production`
   - `VITE_API_BASE_URL=https://sua-api.com`

### Domínio Personalizado

1. No dashboard da Vercel, vá em Settings > Domains
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

### Headers de Cache

O projeto já está configurado com cache otimizado para assets estáticos.

## 🧪 Testes Locais

Antes do deploy, teste localmente:

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📊 Monitoramento

Após o deploy, você terá acesso a:

- **Analytics**: Métricas de performance
- **Functions**: Logs de funções serverless
- **Speed Insights**: Análise de velocidade
- **Real User Monitoring**: Dados reais de usuários

## 🔄 Deploy Contínuo

Com a integração GitHub:

- **Push na main**: Deploy automático em produção
- **Pull Request**: Preview deployment
- **Rollback**: Possibilidade de reverter para versões anteriores

## 🆘 Troubleshooting

### Build falha

1. Verifique os logs no dashboard da Vercel
2. Teste o build localmente: `npm run build`
3. Verifique se todas as dependências estão no `package.json`

### Assets não carregam

1. Verifique se o `public` folder está na raiz
2. Confirme se os imports estão corretos
3. Verifique as configurações de cache

### Performance

1. Use `npm run build` para ver o tamanho dos chunks
2. Considere code splitting para chunks grandes
3. Otimize imagens e assets

## 📞 Suporte

- [Documentação da Vercel](https://vercel.com/docs)
- [Comunidade Vercel](https://github.com/vercel/vercel/discussions)
- [Status da Vercel](https://vercel-status.com)

---

**🎉 Pronto!** Seu projeto estará online em poucos minutos após o deploy.
