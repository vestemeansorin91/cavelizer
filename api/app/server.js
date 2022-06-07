import express from "express";
import chalk from "chalk";

const PORT = 3333;
const app = express();

app.get("/recodenized", function (req, res) {
  res.writeHead(200);
  res.end("Ai ajuns pe reCODEnized");
});

app.get("/api", function (req, res) {
  res.writeHead(200);
  res.end("Ai ajuns pe api....");
});

app.get("*", function (req, res) {
  res.end(404);
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
