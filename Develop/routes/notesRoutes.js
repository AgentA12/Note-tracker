const express = require("express");
const router = express.Router();

const {
  writeData,
  deleteNotes,
  getCurrentNotes,
} = require("../lib/notesFunctions");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/index"));
});

router
  .route("/notes")
  .get((req, res) => {
    let Notes = getCurrentNotes();
    res.json(Notes);
  })
  .post((req, res) => {
    if (req.body) {
      writeData(req.body);
    }
    res.end();
  });

router.delete("/notes/:id", (req, res) => {
  res.json(deleteNotes(req.params.id));
});

module.exports = router;
