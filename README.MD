# API de Dados da Fórmula 1 🏎️

![Made with Fastify](https://img.shields.io/badge/Made%20with-Fastify-black?style=for-the-badge&logo=fastify)
![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue?style=for-the-badge&logo=typescript)

Uma API RESTful minimalista construída com **Fastify** e **TypeScript** para fornecer dados estáticos sobre equipes e pilotos de Fórmula 1. Este projeto serve como um exemplo simples de como criar rotas, manipular requisições e servir dados em formato JSON.

---

## ✨ Funcionalidades

-   Listar todas as equipes.
-   Listar todos os pilotos.
-   Buscar um piloto específico pelo seu ID.
-   Configuração de CORS para permitir requisições de domínios específicos.

---

## 🛠️ Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Fastify](https://www.fastify.io/)
-   [@fastify/cors](https://github.com/fastify/fastify-cors)

---

## 🚀 Como Começar

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

-   **Node.js** (versão 18 ou superior recomendada)
-   **npm** ou **yarn**

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    Para executar o servidor e recarregá-lo automaticamente ao salvar alterações, recomendo usar o `tsx`:
    ```bash
    # Instale o tsx como uma dependência de desenvolvimento
    npm install -D tsx

    # Inicie o servidor em modo watch
    npx tsx watch server.ts
    ```

5.  O servidor estará em execução em `http://localhost:3445`.

---

## 📖 Endpoints da API

A API possui os seguintes endpoints disponíveis:

### Equipes

-   **`GET /teams`**

    Retorna uma lista de todas as equipes de Fórmula 1.

    **Exemplo de Resposta (200 OK):**
    ```json
    [
      {
        "id": 1,
        "name": "McLaren",
        "base": "Working, United Kingdom"
      },
      {
        "id": 2,
        "name": "Mercedes",
        "base": "Brackley, United Kingdom"
      },
      {
        "id": 3,
        "name": "Red Bull Racing",
        "base": "Milton Keynes, United Kingdom"
      }
    ]
    ```

### Pilotos

-   **`GET /drivers`**

    Retorna uma lista de todos os pilotos.

    **Exemplo de Resposta (200 OK):**
    ```json
    [
      {
        "id": 1,
        "name": "Max Verstappen",
        "team": "Red Bull Racing"
      },
      {
        "id": 2,
        "name": "Lewis Hamilton",
        "team": "Ferrari"
      },
      {
        "id": 3,
        "name": "Lando Norris",
        "team": "McLaren"
      }
    ]
    ```

-   **`GET /drivers/:id`**

    Retorna um piloto específico com base no seu `id`.

    **Exemplo de Resposta (200 OK) para `GET /drivers/1`:**
    ```json
    {
      "driver": {
        "id": 1,
        "name": "Max Verstappen",
        "team": "Red Bull Racing"
      }
    }
    ```

    **Exemplo de Resposta de Erro (404 Not Found) para um ID inválido:**
    ```json
    {
      "message": "Driver Not Found"
    }
    ```

---

### 🌐 Configuração do CORS

O Cross-Origin Resource Sharing (CORS) está configurado para aceitar requisições `GET` apenas das seguintes origens:

-   `www.dio.me`
-   `www.fabiodejesus.dev`

Qualquer requisição de outra origem será bloqueada pelo navegador, conforme a política de mesma origem.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.