const express = require("express");
const vasts = express.Router();
const { authenticateToken } = require("../routes/users_route");
const Vast = require("../model/Vast");

//Get_all vasts
vasts.get("", (req, res) => {
  Vast.findAll().then(v => res.json(v));
});

//Get keywordlist
vasts.get("/:id", (req, res) => {
  Vast.findByPk(req.params.id)
    .then(v => {
      v
        ? res.json(v)
        : res.status(404).send("The Vast with the given id was not found");
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

//Create vast
vasts.post("", (req, res) => {
  Vast.create(req.body)
    .then(v => res.json(v))
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

//Update vast
vasts.put("/:id", (req, res) => {
  console.log(req.body);
  Vast.update(req.body, { where: { id: req.params.id } })
    .then(rowsUpdate => {
      if (rowsUpdate == 0)
        return res.status(404).send("The vast with the given id was not found");
      Vast.findByPk(req.params.id).then(v => res.json(v));
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

//delete vast
vasts.delete("/:id", (req, res) => {
  Vast.destroy({ where: { id: req.params.id } })
    .then(rowsDeleted => {
      if (rowsDeleted == 0)
        return res.status(404).send("The vast with the given id was not found");
      res.status(200).send("vast deleted");
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

module.exports = vasts;
