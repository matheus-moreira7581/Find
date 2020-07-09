const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Find API',
            version: '1.0.0',
            description: 'API Express com auto-gerador de documento swagger',
        },
        basePath: './routes/',
    },
    apis: ['auth.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) =>{
    app.use('/api-docs', swaggerUi.server, swaggerUi.setup(options));
}