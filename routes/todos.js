import express from 'express';
import { log } from 'util';

const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Todo.find()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/', (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
      res.status(201).json(newTodo);
    })
    .catch(err => {
      res.send(err);
    });
  console.log(req.body);
});

module.exports = router;
