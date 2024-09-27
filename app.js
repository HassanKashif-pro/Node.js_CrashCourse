const express = require("express");

const app = express(() => {});

app.set("view engine", "ejs");

app.listen(3000);
app.get("/", (req, res) => {
  res.send("./views/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile("./views/About.html");
});

app.use("/404", (req, res) => {
  res.status().sendFile("./views/404.html");
});
