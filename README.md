# Sistema de Chat com Node.js

## Descrição

Este projeto foi desenvolvido como atividade acadêmica e tem como objetivo implementar um sistema simples contendo:

- autenticação de usuário
- envio de e-mail utilizando fila
- chat em tempo real utilizando WebSocket

## Funcionalidades

### Autenticação de usuário
O sistema permite:

- cadastro de usuário
- login
- logout

Os usuários são armazenados em memória durante a execução do servidor.

---

### Envio de e-mail com fila

Após o cadastro de um novo usuário, o sistema adiciona um e-mail de boas-vindas em uma fila.

A fila é processada automaticamente a cada **30 segundos**, enviando os e-mails pendentes utilizando **Nodemailer** e **Mailtrap**.

---

### Chat em tempo real

O sistema possui um chat simples que permite a comunicação entre usuários conectados em tempo real utilizando **WebSocket (Socket.io)**.

As mensagens enviadas por um usuário aparecem instantaneamente para todos os usuários conectados.

---

## Tecnologias utilizadas

- Node.js
- Express
- Socket.io
- Nodemailer
- Mailtrap

---

## Como executar o projeto

### 1 - Clonar o repositório
git clone LINK_DO_REPOSITORIO

### 2 - Entrar na pasta do projeto
cd chat-node-trabalho

### 3 - Instalar dependências
npm install

### 4 - Iniciar o servidor
npm start

---

## Acessar o sistema

Cadastro:
http://localhost:3000/register.html

Login:
http://localhost:3000/login.html

Chat:
http://localhost:3000/chat.html

Para testar o Chat em tempo real, abra uma segunda aba (ou janela anônima), acesse o mesmo endereço, crie uma segunda conta e faça o login. As mensagens aparecerão instantaneamente em ambas as telas.