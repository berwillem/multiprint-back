const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const basicAuth = require("express-basic-auth");
const dotenv = require("dotenv");
dotenv.config();

//  definition ::
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Multiprint API",
    version: "1.0.0",
    description: "Multiprint API Documentation",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1",
      description: "API Server",
    },
  ],
  components: {
    securitySchemes: {
      basicAuth: {
        type: "http",
        scheme: "basic",
      },
    },
  },
  security: [
    {
      basicAuth: [],
    },
  ],
};

//  options ::
const options = {
  swaggerDefinition,
  apis: ["./routes/**/*.js"],
};

// init ::
const swaggerSpec = swaggerJsdoc(options);

module.exports = function setupSwagger(app) {
  app.use(
    "/api-docs",
    basicAuth({
      users: {
        [process.env.SWAGGER_USERNAME || "default_username"]:
          process.env.SWAGGER_PASSWORD || "default_password",
      },
      challenge: true,
      unauthorizedResponse: "Unauthorized",
    }),
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );
};
