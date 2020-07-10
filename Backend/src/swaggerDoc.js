const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Find",
        description: "Aplicativo de prestação de serviços e venda de produtos",
        contact: {
          name: "Squad 1"
        },
        servers: ["http://localhost:3333"]
      }
    },
    apis: ["swaggerDoc.js"]
  };
  
const swaggerDoc = swaggerJsDoc(swaggerOptions);
 