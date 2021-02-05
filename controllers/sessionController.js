const express = require("express");

const router = express.Router();
const Session = require("../models/session");

router.get("/", (req, res) => {
  Session.find({
    where: {
      id: req.params.id,
    },
  })
    .then((sessions) => {
      res.json(sessions);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Session.create(req.body)
    .then((newSession) => {
      console.log(newSession);
      res.json(newSession);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Session.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Session.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;