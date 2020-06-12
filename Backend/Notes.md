# 1° SPRINT

O foco na primeira sprint está em torno do primeiro contato do usuário com o
aplicativo, principalmente pelo lado do cliente. Trabalhando no cadastramento e
login.

- Prazo: 

    - Inicio: Segunda-feira (08/06/2020); 
    - Final: Sexta-feira (12/06/2020);

### Entrega

- Cliente:

    - Regra de negócio - Controles;
    - Create - Inserção de dados pessoais;
    - Read - Queries;
    - Update - Atualizações dos dados;
    - Delete - Exclusão de dados.


#### Link util

- [Link do nosso Trello](https://trello.com/b/Y9fmF1ye/find)

---

## Dia 1: back-end da aplicação (08/06/2020)


- [x] Resetar o projeto, e fazer do zero as instalações;
- [x] Organizar o projeto;
- [x] Criar o banco de dados;
- [x] Criar a conexão;
- [x] Criar as tabelas;
- [x] Popular as tabelas;
- [x] Fazer relacionamentos;
- [x] Testar alguns resultados.


## Dia 2: back-end da aplicação (09/06/2020)

- [x] Cadastro do cliente;
- [x] Cadastro do endereço;
- [x] Listar todos os endereços de um cliente especifico;
- [x] Mostrar as informações de um cliente especifico;
- [x] Testar alguns resultados.

## Dia 3: back-end da aplicação (10/06/2020)
- [x] Atualizar dados de um cliente;
- [x] Deletar um cliente e seus endereços;
- [x] Add um recurso para pegar erro;
- [x] Add comentários;
- [x] Testar alguns resultados.

## Dia 4: back-end da aplicação (11/06/2020)
- [x] Validar cadastro do cliente;
- [x] Listar endereços se eles existirem; 
- [x] Criptografar senha;
- [x] Login usuário.

---

## Guia para ativação do código

- Atualizar as informações de usuário e senha no arquivo "knexfile.js"

- Instalar pacotes do node modules 
```node
npm i
```

- Inicializar o servidor
```node
npm run dev
```

- Criar tabelas
```node
npm run migrations
```

- Popular tabelas 
```node
npm run seeds
```

