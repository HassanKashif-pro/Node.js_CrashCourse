const express = require("express");

const app = express(() => {});

app.set("view engine", "ejs");

app.listen(3000);
app.get("/", (req, res) => {
  res.render("Index");
});
app.get("/about", (req, res) => {
  res.render("About");
});
app.get("/blog/create", (req, res) => {
  res.render("create");
});

app.use("/404", (req, res) => {
  res.status().render("404");
});
