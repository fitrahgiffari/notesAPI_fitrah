const express = require("express");
const app = express.Router();
const db = require("../controler/dbController");

app.get("/notes", (req, res) => {
  let result = db.getAll();
  res.send(result);
});

module.exports = app;
