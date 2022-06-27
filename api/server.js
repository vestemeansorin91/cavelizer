require("dotenv").config();
require("./app/modules/auth/passport.middleware");

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

/* Morgan */
const morgan = require("morgan");
app.use(morgan("tiny"));

/* Swagger */
const { initSwagger } = require("./app/swagger.init");

/* Prepare mongo setup */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

/* Routes */
const userRoutes = require("./app/modules/user/user.routes");
const authRoutes = require("./app/modules/auth/auth.routes");

app.use("/api", userRoutes);
app.use("/api", authRoutes);

/* Frontend Build / Output */
const uiRoutes = require("./app/modules/ui/ui.routes");
app.use("/ui", express.static(path.join(__dirname, "/public/ui")));
app.use("", uiRoutes);

initSwagger(app);

mongoose.connect(
  process.env.MONGO_URL || "mongodb://localhost:27017/cavelizer",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) console.log("Mongo error!", err);
    console.log("Database is ready!");
    app.listen(process.env.PORT, () =>
      console.log(`Server started, on port ${process.env.PORT}`)
    );
  }
);
