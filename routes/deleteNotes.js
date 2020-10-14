const express = require("express");
const app = express.Router();
const db = require("../controler/dbController");

app.delete("/notes", (req, res) => {
  const query = req.query;
  const id = query.id;
  const parsedId = parseInt(id);
  const getData = db.get(parsedId);
  if (getData) {
    db.deletes(parsedId);
  } else {
    res.status(404).send("no data found");
  }
  res.send("ok");
});

module.exports = app;
