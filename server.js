const bodyParser = require("body-parser");
const express = require("express");

const getNotes = require("./routes/getNotes");
const deleteNotes = require("./routes/deleteNotes");
const editNotes = require("./routes/editNotes");
const addNotes = require("./routes/addNotes");

const app = express();
app.use(bodyParser.json());
app.use(getNotes);
app.use(deleteNotes);
app.use(editNotes);
app.use(addNotes);

// app.delete("/notes", (req, res) => {
//   const query = req.query;
//   const id = query.id;
//   const parsedId = parseInt(id);
//   const getData = db.get("notes").find({ id: parsedId }).value();

//   if (getData) {
//     db.get("notes").remove({ id: parsedId }).write();
//   } else {
//     res.status(404).send("no data found");
//   }
//   res.send("ok");
// });

// app.patch("/notes", (req, res) => {
//   const body = req.body;
//   const id = body.id;
//   const parsedId = parseInt(id);
//   const getData = db.get("notes").find({ id: parsedId }).value();

//   if (getData) {
//     db.get("notes").find({ id: parsedId }).assign(body).write();
//   } else {
//     res.status(404).send("Data Not Found");
//   }
//   res.send(body);
// });

// app.post("/notes", (req, res) => {
//   const body = req.body;
//   const id = body.id;
//   const parsedId = parseInt(id);
//   const getData = db.get("notes").find({ id: parsedId }).value();
//   if (getData) {
//     res.status(409).send("conflict");
//   } else {
//     db.get("notes").push(body).write();
//   }
//   res.send(body);
// });

// app.get("/notes", (req, res) => {
//   let result = db.get("notes").value();
//   res.send(result);
// });

app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(5000);
