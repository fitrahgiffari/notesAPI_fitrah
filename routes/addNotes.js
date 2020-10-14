const express = require("express");
const app = express.Router();
const db = require("../controler/dbController");

app.post("/notes", (req, res) => {
  const body = req.body;
  const id = body.id;
  const parsedId = parseInt(id);
  const getData = db.get(parsedId);

  if (getData) {
    res.status(409).send("conflict");
  } else {
    db.add(body);
  }
  res.send(body);
});

module.exports = app;
