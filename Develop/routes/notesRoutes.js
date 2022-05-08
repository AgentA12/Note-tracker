const express = require("express");
const router = express.Router();

const { Notes } = require("../db/db.json");

const { writeData, deleteNotes } = require("../lib/notesFunctions");

router
  .route("/notes")
  .get((req, res) => {
    res.json(Notes);
  })
  .post((req, res) => {
    if (req.body) {
      writeData(req.body);
    }
    res.end();
  });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/index"));
});

router.delete("/notes/:id", (req, res) => {
  res.json(deleteNotes(req.params.id));
});

module.exports = router;
