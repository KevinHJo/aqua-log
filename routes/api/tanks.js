const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tank = require('../../models/Tank');
const validateTankInput = require('../../validation/tank/create')

router.get('/user/:user_id', (req, res) => {
  Tank.find({user: req.params.user_id})
    .then(tanks => res.json(tanks))
    .catch(err => res.status(404).json({notanksfound: "No tanks found"}));
});

router.get('/:id', (req, res) => {
  Tank.findById(req.params.id)
    .then(tank => res.json(tank))
    .catch(err => res.status(404).json({ notankfound: "No tank found with that ID" }))
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateTankInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTank = new Tank({
    name: req.body.name,
    user: req.body.user
  });

  newTank.save()
    .then(tank => res.json(tank))
    .catch(err => res.json(err))
});

module.exports = router;