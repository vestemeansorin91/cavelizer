const doc = require("./swagger-config");
const swaggerAutogen = require("swagger-autogen")();

const outputFile = "app/config/swagger/swagger-output.json";
const endpointsFiles = ["app/modules/user/user.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
