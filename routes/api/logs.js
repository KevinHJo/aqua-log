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

router.get('/:id', (req, res) => {
  Log.findById(req.params.id)
    .then(log => res.json(log))
    .catch(err => res.status(404).json({ nologfound: "No log found with that ID" }))
});

router.post('/', (req, res) => {
  const newLog = new Log({
    ammonia: req.body.ammonia,
    nitrite: req.body.nitrite,
    nitrate: req.body.nitrate,
    temperature: req.body.temperature,
    pH: req.body.pH,
    salinity: req.body.salinity,
    calcium: req.body.calcium,
    alkalinity: req.body.alkalinity,
    magnesium: req.body.magnesium,
    phosphate: req.body.phosphate,
    tank: req.body.tank,
    user: req.body.user,
    date: new Date(req.body.date)
  });

  newLog.save()
    .then(log => res.json(log))
    .catch(err => res.json(err))
});

module.exports = router;