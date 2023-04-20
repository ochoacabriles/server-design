const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      description: 'Simple REST API to manage users',
    },
  },
  apis: ['./docs/*.yaml'],
};

module.exports.swaggerSpecs = swaggerJsDoc(swaggerOptions);