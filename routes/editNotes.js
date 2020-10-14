const express = require("express");
const app = express.Router();
const db = require("../controler/dbController");

app.patch("/notes", (req, res) => {
  const body = req.body;
  const id = body.id;
  const parsedId = parseInt(id);
  const getData = db.get(parsedId);

  if (getData) {
    db.edit(body, parsedId);
  } else {
    res.status(404).send("Data Not Found");
  }
  res.send(body);
});

module.exports = app;
