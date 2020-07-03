<p align="center">
<img src="./Backend/uploads/find-logo.png" alt="find-logo" width="20%"/>
</p>

## Sobre o aplicativo :iphone:

Find é um aplicativo onde o comerciante poderá anunciar sua empresa ou marca, e além disso, poderá gerir seu lucro diário através de uma planilha bem simples e interativa. Os clientes poderão agendar ou retirar um produto ou serviço. Os produtos podem ser entregues por Delivery, ou até mesmo podendo ser retirados no estabelecimento. Já os serviços podem ser agendados, para evitar aglomerações. Nosso objetivo é propor uma ótima experiência para o usuário, tanto os comerciantes, quanto os clientes. Além disso, queremos passar uma sensação de segurança para ambos, de modo que não se sintam receosos ao utilizar o aplicativo.


## Guia para ativação do código (SETUP) :pushpin:

#### Rodando o Backend da aplicação

- Antes de rodar a aplicação, crie um banco de dados no **postgreSQL**;

- Depois atualize as informações de usuário e senha no arquivo `knexfile.js` :page_facing_up:

- Acessar pasta "Backend" :open_file_folder:

```node
cd Backend
```

- Instalar pacotes do node modules(caso não tenha)

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


## Tecnologias :pushpin:


| UX Design |      Front-End     |      Back-End     |   Database  |
|-----------|--------------------|-------------------|-------------|
| Adobe XD  | React Native(Expo) | Node.js (Express) | PostgreSQL  |



## Links úteis :link:

- Como chegamos nessa solução: [Clique aqui](https://docs.google.com/document/d/1Vsk6FfSIcFM8ikHsm82gj1hrL63U6hUuCF7S36d11aU/edit)

- Acesse o nosso protótipo: [Clique aqui](https://xd.adobe.com/view/e4ae45b3-5f00-4560-7456-41f21a5df061-929f/screen/a09ca263-f883-4555-b400-85d6bf4d6e32/Tela-Inicial-17)

- Acesse o nosso style guide: [Clique aqui](https://xd.adobe.com/view/489e7a75-0e3b-4e31-440a-8272bdc31f54-3eaf/)

- Modelagem do banco de dados: [Clique aqui](https://whimsical.com/Em9E37vFo2G1r3vHxHXCCM)

- Acompanhe nosso cronograma: [Veja nossa sprint](./Sprints)


## Equipe :pushpin:

- [Matheus Santos (UX)](https://www.linkedin.com/in/matheus-santos-7347421a1/)
- [Caio Enrique (DEV)](https://github.com/100f)
- [Matheus Moreira (DEV)](https://github.com/matheus-moreira7581)
- [Rodrigo Souza (DEV)](https://github.com/rodrigoscruz)
- [Samuel W Lorena (DEV)](https://github.com/SamukaWenceslau)

---
Projeto do Programa de Formação FCamara - Squad 1 - Aplicativo Find.
