```markdown
# 📝 Lista de Tarefas (To-Do List)

Aplicação desenvolvida para o gerenciamento de tarefas cotidianas, permitindo criar, visualizar, editar e excluir registros por meio de uma interface multiplataforma (Mobile e Web) totalmente integrada a uma API REST externa.

---

## 🚀 Funcionalidades

* **Cadastro de tarefas:** Criação de novos registros com título e descrição opcional.
* **Listagem dinâmica:** Exibição em tempo real das tarefas salvas no banco de dados.
* **Edição simplificada:** Atualização rápida de títulos ou descrições direto pelo card.
* **Exclusão inteligente:** Remoção de registros com caixas de confirmação nativas adaptadas para Web (`window.confirm`) e Mobile (`Alert.alert`).
* **Suporte Híbrido:** Interface responsiva que roda perfeitamente no navegador e em dispositivos móveis via Expo.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
* **React Native & Expo:** Construção da interface e componentização nativa.
* **React Native Web:** Suporte e renderização para navegadores.
* **Axios:** Consumo e requisições HTTP para a API REST.

### Back-end
* **Node.js & Express:** Criação das rotas, middlewares e lógica de servidor.
* **Mongoose:** Modelagem de dados e integração com o banco de dados.

### Banco de Dados
* **MongoDB Atlas:** Banco de dados NoSQL hospedado em nuvem.

---

## 📁 Estrutura do Projeto

```text
.
├── frontend
│   ├── App.js
│   ├── package.json
│   └── src
│       └── services
│           └── api.js
│
└── backend
    ├── src
    │   ├── config
    │   ├── controllers
    │   ├── models
    │   ├── routes
    │   └── server.js
    └── package.json

```

---

## 🔧 Instalação e Execução Local

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>

```

### 2. Configurar e Executar o Backend

Navegue até a pasta do servidor:

```bash
cd backend
npm install

```

Crie um arquivo `.env` na raiz da pasta `backend` com as seguintes variáveis:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
PORT=3000

```

Inicie o servidor de desenvolvimento:

```bash
npm run dev

```

### 3. Configurar e Executar o Frontend

Em um novo terminal, navegue até a pasta do cliente:

```bash
cd frontend
npm install

```

Certifique-se de configurar o arquivo `src/services/api.js` apontando para a URL correta (seja o seu IP local para testes ou o link do servidor de produção).

Inicie o bundler do Expo:

```bash
npx expo start

```

* Pressione `w` no terminal para abrir a versão **Web** no seu navegador.
* Use o aplicativo **Expo Go** no celular para escanear o QR Code (utilize o parâmetro `--tunnel` caso esteja em redes Wi-Fi diferentes).

---

## 🌐 Deploy & Produção

* **Back-end:** Hospedado na plataforma **Render**, garantindo persistência global aos dados.
* **Front-end:** Preparado para deploy contínuo em plataformas como **Vercel** através do ecossistema React Native Web.

---

## 🛣️ Endpoints da API

| Método | Endpoint | Descrição |
| --- | --- | --- |
| **GET** | `/tasks` | Lista todas as tarefas cadastradas |
| **POST** | `/tasks` | Cria uma nova tarefa |
| **PUT** | `/tasks/:id` | Atualiza o título/descrição de uma tarefa existente |
| **DELETE** | `/tasks/:id` | Remove permanentemente uma tarefa do banco |

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o propósito prático de consolidar conceitos de desenvolvimento **Full Stack**. Através dele, foi possível exercitar a arquitetura de APIs REST, manipulação de bancos de dados NoSQL, tratamento de erros em requisições assíncronas cursadas (CORS) e adaptação de interfaces nativas para a Web.

```

```
