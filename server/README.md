# Backend da Aplicação de Chat em Tempo Real

Este é o backend da aplicação de chat em tempo real desenvolvida com Node.js, Express, Socket.io e TypeScript. O backend é responsável por fornecer a API necessária para o funcionamento do chat, incluindo a obtenção e envio de mensagens.

## Arquivos do Projeto

- `server.ts`: Arquivo principal que contém a lógica do servidor. É responsável por iniciar o servidor Express, configurar as rotas da API, lidar com as conexões Socket.io e gerenciar as mensagens armazenadas.

- `package.json`: Arquivo de manifesto do projeto que contém as dependências e scripts necessários para executar o servidor.

## Como Iniciar o Servidor

Para iniciar o servidor, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em: https://nodejs.org/

2. Navegue até o diretório do projeto.

3. Instale as dependências do projeto executando o seguinte comando no terminal:

```shell
yarn install
```

4. Inicie o servidor em modo de desenvolvimento executando o seguinte comando:

```shell
yarn dev
```

5. O servidor será iniciado e estará ouvindo na porta especificada no arquivo `server.ts` (por padrão, é a porta 3001).

6. Certifique-se de ter o frontend da aplicação em execução e configurado para se comunicar com o backend na porta correta.

## Endpoints da API

- GET `/messages`: Retorna todas as mensagens armazenadas no servidor como um JSON.

- POST `/messages/insert`: Insere uma nova mensagem no servidor. A mensagem deve ser enviada no corpo da requisição.

Obs: Endpoints criados somente para fins acadêmicos

## Tecnologias Utilizadas

- Node.js
- Express
- Socket.io
- TypeScript

Sinta-se à vontade para explorar e modificar o projeto de acordo com suas necessidades.


