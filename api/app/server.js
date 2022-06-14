const express = require("express");
const chalk = require("chalk");
const { StatusCodes } = require("http-status-codes");

const PORT = 3333;
const app = express();

const employees = [
  {
    id: 1,
    name: "Sorin",
    isActive: true,
  },
  {
    id: 2,
    name: "Alex",
    isActive: true,
  },
  {
    id: 3,
    name: "Petrut",
    isActive: false,
  },
];
const names = ["Alex", "Ionut", "Dana", "Naturella", "iPhone", "Servetele"];

app.use(express.json({ limit: "50mb" }));

app.get("/api/users", function (request, response) {
  const { id, isActive, name } = request.query;

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.write(JSON.stringify(employees));
  response.end();
});

app.post("/api/users", function (request, response) {
  const randomName = Math.floor(Math.random() * names.length);
  const randomIsActive = !!Math.floor(Math.random() * 2);

  const newEmployee = {
    id: employees.length + 1,
    name: names[randomName],
    isActive: randomIsActive,
  };

  employees.push(newEmployee);

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.write(JSON.stringify(employees));
  response.end();
});

app.get("/api/users/:id", function (request, response) {
  const id = request.params.id;

  let foundEmployee;

  for (let i = 0; i < employees.length; i++) {
    if (+id === employees[i].id) {
      foundEmployee = employees[i];
      break;
    }
  }

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.write(JSON.stringify(foundEmployee));
  response.end();
});

app.patch("/api/users/:id/toggleIsActive", function (request, response) {
  const id = request.params.id;

  let foundEmployee;

  for (let i = 0; i < employees.length; i++) {
    if (+id === employees[i].id) {
      employees[i].isActive = !employees[i].isActive;
      foundEmployee = employees[i];
      break;
    }
  }

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.write(JSON.stringify(foundEmployee));
  response.end();
});

app.delete("/api/users/:id", function (request, response) {
  const id = request.params.id;

  for (let i = 0; i < employees.length; i++) {
    if (+id === employees[i].id) {
      employees.splice(i, 1);
    }
  }

  response.writeHead(StatusCodes.OK, { "Content-Type": "application/json" });
  response.end();
});

app.listen(PORT, function () {
  console.log(
    chalk.bgBlue("Server started: "),
    chalk.blue(`Listening to port ${PORT}`)
  );
});

// LINUX
// netstat -ano | findstr :3000
// taskkill /PID 5192 /F

// MACOS
// lsof -i -P | grep LISTEN | grep :3000
// kill -9 111111
