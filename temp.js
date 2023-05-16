const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middle of middleware");
  res.send("<H1>Hi prasad</H1>");
  next();
});

app.use((req, res, next) => {
  console.log("in the middle of second middleware");
});

http.createServer(app).listen(5000);
