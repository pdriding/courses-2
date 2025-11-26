const express = require("express");
const feedRoutes = require("./routes/feed"); // Import your feed routes
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // Parses JSON request bodies (e.g., application/json)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // or a specific domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

app.use("/feed", feedRoutes); // All requests starting with /feed go to feedRoutes

app.listen(8080);
