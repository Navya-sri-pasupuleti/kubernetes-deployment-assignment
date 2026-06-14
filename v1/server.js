const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/api/version", (req, res) => {
  res.json({
    version: "v1",
    message: "Welcome to Version 1"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
