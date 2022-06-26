const SWAGGER_OUTPUT_PATH = "./config/swagger/swagger-output.json";

exports.initSwagger = (app) => {
  try {
    const swaggerFile = require(SWAGGER_OUTPUT_PATH);
    const swaggerUi = require("swagger-ui-express");
    app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  } catch (e) {
    console.log(e);
  }
};
