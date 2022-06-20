const express = require("express");
const app = express();
const PORT = 3333;

app.use(express.json({ limit: "50mb" }));

/* Prepare mongo setup */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/cavelizer";

/* Routes */
const userRoutes = require("./user/user.routes");

app.use("/api/users", userRoutes);

mongoose.connect(url, function (err) {
  if (err) console.log("Mongo error!", err);
  console.log("Database is ready!");
  app.listen(PORT, () => console.log(`Server started, on port ${PORT}`));
});
