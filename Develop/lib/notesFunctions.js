const path = require("path");
const fs = require("fs");
const { Notes } = require("../db/db.json");

function getCurrentNotes(params) {
  let currentNotes = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"))
  );
  return currentNotes.Notes;
}

function writeData(data) {
  let userArray = Notes;
  data.id = userArray.length + 1;
  userArray.push(data);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ Notes: userArray }, null, 2)
  );
}

function deleteNotes(noteid) {
  let filteredNotes = Notes.filter((note) => {
    if (note.id == noteid) return false;
    return true;
  });

  for (i = 0; i < filteredNotes.length; i++) {
    filteredNotes[i].id = i + 1;
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ Notes: filteredNotes }, null, 2)
  );
}

module.exports = { writeData, deleteNotes, getCurrentNotes };
