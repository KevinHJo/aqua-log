const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Log');

router.get('/user/:user_id', (req, res) => {
  Log.find({user: req.params.user_id})
    .then(logs => res.json(logs))
    .catch(err => res.status(404).json({nologsfound: "No logs found"}));
});

router.get('/tank/:tank_id', (req, res) => {
  Log.find({tank: req.params.tank_id})
    .then(logs => res.json(logs))
    .catch(err => res.status(404).json({nologsfound: "No logs found"}));
})

router.get('/:id', (req, res) => {
  Log.findById(req.params.id)
    .then(log => res.json(log))
    .catch(err => res.status(404).json({ nologfound: "No log found with that ID" }))
});

router.post('/', (req, res) => {
  const newLog = new Log({
    logType: req.body.logType,
    value: req.body.value,
    tank: req.body.tank,
    user: req.body.user,
    date: new Date(req.body.date)
  });

  newLog.save()
    .then(log => res.json(log))
    .catch(err => res.json(err))
});

module.exports = router;