const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const path = require("path");
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use("/add-product", (req, res) => {
  // Because we send a response here we DO NOT call next()
  res.send("<h1>Add product page</h1>");
});

app.use("/delete-product", (req, res) => {
  // Because we send a response here we DO NOT call next()
  res.send("<h1>Add product page</h1>");
});

app.use((req, res) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
