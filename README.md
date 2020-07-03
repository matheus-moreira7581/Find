<p align="center">
<img src="./Backend/uploads/find-anim-logo.gif" alt="find-logo" width="200px"/>
</p>

## Sobre o aplicativo :iphone:

Find é um aplicativo onde o comerciante poderá anunciar sua empresa ou marca, e além disso, poderá gerir seu lucro diário através de uma planilha bem simples e interativa. Os clientes poderão agendar ou retirar um produto ou serviço. Os produtos podem ser entregues por Delivery, ou até mesmo podendo ser retirados no estabelecimento. Já os serviços podem ser agendados, para evitar aglomerações. Nosso objetivo é propor uma ótima experiência para o usuário, tanto os comerciantes, quanto os clientes. Além disso, queremos passar uma sensação de segurança para ambos, de modo que não se sintam receosos ao utilizar o aplicativo.


## Guia para ativação do código (SETUP) :pushpin:

- **O Backend da aplicação** está sendo rodada no __Heroku__, porem caso queiram executá-la na sua máquina.
  Sigam os passos disponibilizados no arquivo [`README.md`](./Backend/Readme.md) na pasta Backend :open_file_folder:.
  
  - Se o backend for rodado na sua maquina, lembre se de ir em [`./Mobile/src/services/api.js`](./Mobile/src/services/api.js). 
  E adicionar o IP da máquina, e a porta (3333).
  
**Executando a aplicação (front-end)**

- Instalar aplicativo do expo no celular;

- Acessar pasta "Mobile" :open_file_folder:

```node
cd Mobile
```

- Instalar as dependências;

```node
 npm i
```
ou

```node
  yarn install
```

- Inicializar a aplicação;

```node
 npm run start
```
ou

```node
 yarn start
```

- Depois de inicializar, irá abrir uma página em seu navegador. Nesta página, selecione a opção de LAN em **connection**;
- Logo após, abra o app do expo no seu celular, escaneie o QR Code que apareceu no navegador (O celular precisa estar conectado a mesma rede de seu computador);
- Espere o aplicativo carregar e pronto! 

- OBS: Se o expo apresentar algum erro de conexão, desative o firewall do seu computador, isso pode estar bloqueando o acesso.

### Login para teste

| tipo  |        login       |  senha |
|-------|--------------------|--------|
|cliente|lucas@gmail.com     | 123456 |
|empresa|tastypizza@gmail.com| 123456 |



## Tecnologias :pushpin:

- **UX Design** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" alt="icon" width="20px"/> 
    - Adobe XD
    
- **Front-End** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="icon" width="35px"/>
    - React Native (Expo)
    
- **Back-End** <img src="https://i0.wp.com/codigosimples.net/wp-content/uploads/2017/03/nodejs.png?fit=500%2C500&ssl=1" alt="icon" width="35px"/> 
    - Node.js (Express)
    
- **Database** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="icon" width="20px"/> 

    - PostgreSQL



## Links úteis :link:

- Como chegamos nessa solução: [Clique aqui](https://docs.google.com/document/d/1Vsk6FfSIcFM8ikHsm82gj1hrL63U6hUuCF7S36d11aU/edit)

- Acesse o nosso protótipo: [Clique aqui](https://xd.adobe.com/view/db18172e-c565-45f8-5975-420162bf4ce1-ad29/)

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
