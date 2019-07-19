const router = require("express").Router();

const Projects = require("../models/project-model");

router.get("/", (req, res) => {
  Projects.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
    .then(project => {
      Projects.findActions(id).then(actions => {
        project.actions = actions;
        res.status(200).json(project);
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Projects.add(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error when trying to process this request."
      });
      console.log(err);
    });
});

module.exports = router;
