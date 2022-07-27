const SWAGGER_OUTPUT_PATH = 'app/config/swagger/swagger-output.json';
const fs = require('fs');

exports.initSwagger = async app => {
    try {
        await fs.promises.access(SWAGGER_OUTPUT_PATH, fs.constants.F_OK, () => {
            const swaggerFile = require(SWAGGER_OUTPUT_PATH);
            const swaggerUi = require('swagger-ui-express');
            app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
        });
    } catch (e) {
        console.info(`No swagger-output.json file generated. You can run npm run swagger to generate it!`);
    }
};
