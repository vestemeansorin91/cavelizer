require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

/* Swagger */
const { initSwagger } = require("./app/swagger.init");

/* Prepare mongo setup */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

/* Routes */
const userRoutes = require("./app/modules/user/user.routes");

app.use("/api", userRoutes);

initSwagger(app);

mongoose.connect(process.env.MONGO_URL, function (err) {
  if (err) console.log("Mongo error!", err);
  console.log("Database is ready!");
  app.listen(process.env.PORT, () =>
    console.log(`Server started, on port ${process.env.PORT}`)
  );
});
