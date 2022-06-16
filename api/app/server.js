// 1. Creeaza server
// const express = require("express"); // Importa libraria express , o vom folosi pentru API-uri
// const PORT = 3333; // scrie o constanta unde sa pastrezi portul
// const app = express(); // Invoci libraria express
// app.listen(PORT, function () { // PORNESTE SERVERUL

// }

// 2. Conecteaza-te la baza de date
// const mongoose = require("mongoose"); // Importi libraria mongoose
// mongoose.Promise = global.Promise; // setezi promise system pe mongoose (NU VA EXPLIC)
// const url = "mongodb://localhost:27017/cavelizer"; // URL-ul trebuie sa fie de forma asta
// mongoose.connect(url, function (err) { // Conecteaza-te la baza de date
//   if (err) {
//     console.log("Mongo error!", err);
//   }
// })

// request.body
// request.params
// request.query

const express = require("express");
const chalk = require("chalk");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const { request } = require("express");
mongoose.Promise = global.Promise;

const PORT = 3333;
const app = express();

app.use(express.json({ limit: "50mb" }));

// app.get("/api/users", function (request, response) {
//   const { id, isActive, name } = request.query;

//   response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
//   // response.write(JSON.stringify(employees));
//   response.end();
// });

/* localhost:3333/api/users POST  CREATE USER */
app.post("/api/users/", async function (request, response) {
  /* CE PRIMESC DE LA INSOMNIA */
  const { name, password, email, isActive, age } = request.body;

  /* Importam colectia pe care vrem sa o manipulam / accesam */
  const usersCollection = require("./user/user.schema");

  /* VOM ADAUGA IN BAZA DE DATE ACEST USER */

  const userMongoCumArata = await new usersCollection({
    name,
    password,
    email,
    isActive,
    age,
  }).save();

  console.log(userMongoCumArata);

  /* CE II DAU LA INSOMNIA */
  response.writeHead(StatusCodes.OK);
  // response.write(JSON.stringify(employees));
  response.end();
});

// app.get("/api/users/:id", function (request, response) {
//   response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
//   // response.write(JSON.stringify(foundEmployee));
//   response.end();
// });

// app.patch("/api/users/:id/toggleIsActive", function (request, response) {
//   const id = request.params.id;

//   response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
//   // response.write(JSON.stringify(foundEmployee));
//   response.end();
// });

// app.delete("/api/users/:id", function (request, response) {
//   const id = request.params.id;

//   response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
//   response.end();
// });

const url = "mongodb://localhost:27017/cavelizer";
mongoose.connect(url, function (err) {
  if (err) {
    console.log("Mongo error!", err);
  }

  console.log(chalk.green("Database is ready!"));

  app.listen(PORT, function () {
    console.log(
      chalk.bgBlue("Server started: "),
      chalk.blue(`Listening to port ${PORT}`)
    );
  });
});
