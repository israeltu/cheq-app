const express = require("express");
const keywordlists = express.Router();
const { authenticateToken } = require("../routes/users_route");
const KeywordList = require("../model/Keywordlist");

//Get_all keywordlists
keywordlists.get("", (req, res) => {
  KeywordList.findAll().then(k => res.json(k));
});

//Get keywordlist
keywordlists.get("/:id", (req, res) => {
  KeywordList.findByPk(req.params.id)
    .then(k => {
      k
        ? res.json(k)
        : res.status(404).send("The keyword with the given id was not found");
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

//Create keywordlist
keywordlists.post("", (req, res) => {
  console.log(req.body);
  KeywordList.create(req.body)
    .then(k => res.json(k))
    .catch(response => {
      console.log(response);
      // const list = [];
      // errors.forEach(element => list.push(element.message));
      // res.status(400).send(list);
    });
});

//Update keywordlist
keywordlists.put("/:id", (req, res) => {
  KeywordList.update(req.body, { where: { id: req.params.id } })
    .then(rowsUpdate => {
      if (rowsUpdate == 0)
        return res
          .status(404)
          .send("The keyword with the given id was not found");
      KeywordList.findByPk(req.params.id).then(k => res.json(k));
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

//delete keywordlist
keywordlists.delete("/:id", (req, res) => {
  KeywordList.destroy({ where: { id: req.params.id } })
    .then(rowsDeleted => {
      if (rowsDeleted == 0)
        return res
          .status(404)
          .send("The keyword with the given id was not found");
      res.status(200).send("Keyword deleted");
    })
    .catch(({ errors }) => {
      const list = [];
      errors.forEach(element => list.push(element.message));
      res.status(400).send(list);
    });
});

module.exports = keywordlists;
