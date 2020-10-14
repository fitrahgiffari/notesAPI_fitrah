const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ notes: [] }).write();

function getAll() {
  return db.get("notes").value();
}

function get(id) {
  return db.get("notes").find({ id }).value();
}

function add(body) {
  return db.get("notes").push(body).write();
}

function edit(body, parsedId) {
  return db.get("notes").find({ id: parsedId }).assign(body).write();
}

function deletes(parsedId) {
  return db.get("notes").remove({ id: parsedId }).write();
}

const functions = {
  get,
  getAll,
  add,
  edit,
  deletes,
};

module.exports = functions;
