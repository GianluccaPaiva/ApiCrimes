# 🕷️ API Crimes - Sistema de Alerta de Juiz de Fora

Uma API RESTful desenvolvida em Node.js com Express para consultar e filtrar ocorrências (crimes) na cidade de Juiz de Fora. 

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js** (Framework web)
- **Nodemon** (Para desenvolvimento)
- **Módulos ES (ESM)**

## 📋 Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## 🛠️ Instalação e Execução

1. Clone este repositório ou faça o download dos arquivos.
2. Acesse a pasta do projeto no terminal.
3. Instale as dependências executando:
   ```bash
   npm install
   ```
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   *O servidor iniciará, por padrão, na porta `3000` (ou na porta definida na variável de ambiente `PORT`).*

## 🌐 API em Produção (Hospedagem)

A API está hospedada no Render e pode ser acessada publicamente através da URL base abaixo:

- **URL Base:** `https://apicrimes.onrender.com`

## 📖 Como Usar a API

### 1. Rota Principal (Boas-vindas)
- **Endpoint:** `GET /`
- **Exemplo URL:** `https://apicrimes.onrender.com/`
- **Descrição:** Retorna uma mensagem de boas-vindas do sistema de alerta.

### 2. Buscar Ocorrências (Crimes)
- **Endpoint:** `GET /crimes`
- **Exemplo URL:** `https://apicrimes.onrender.com/crimes`
- **Descrição:** Retorna a lista completa de crimes se não houver parâmetros. Pode ser filtrada dinamicamente utilizando *Query Parameters*.

#### 🔍 Filtros Suportados (`/crimes?chave=valor`)

A API suporta múltiplos filtros simultâneos passados na URL. 

- **Por ID:**
  `https://apicrimes.onrender.com/crimes?id=1`
- **Por Localização (Bairro, Cidade, Ponto de Referência):**
  `https://apicrimes.onrender.com/crimes?bairro=centro` ou `?ponto_referencia=praça` *(A busca ignora maiúsculas e minúsculas. Ponto de referência suporta busca parcial)*
- **Por Incidente:**
  `https://apicrimes.onrender.com/crimes?incidente=roubo` *(Suporta busca parcial de texto)*
- **Por Valores Booleanos:**
  `https://apicrimes.onrender.com/crimes?resolvido=true` ou `?em_andamento=false`
- **Múltiplos Filtros:**
  `https://apicrimes.onrender.com/crimes?bairro=centro&resolvido=true`

## 📝 Estrutura do Projeto

- `index.js`: Arquivo principal contendo a configuração do Express e as rotas da API.
- `data/crimes_jf_aranha_booleano.json`: Base de dados local em formato JSON.
- `package.json`: Configurações do projeto e dependências.

## 📄 Licença

Este projeto está sob a licença ISC.
