const router = require("express").Router();

const Actions = require("../models/actions-model");

router.get("/", (req, res) => {
  Actions.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Actions.add(data)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Actions.update(changes, id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
      console.log(err);
    });
});

module.exports = router;
