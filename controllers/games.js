const express = require('express')
const router = express.Router()
const Game = require('../models/Game')

// get a single "matchday"
router.get('/:id', (req, res) => {
  Game.find({ matchday: req.params.id })
    .then(games => {
      res.json(games)
    })
    .catch(err => {
      console.log(err)
    })
})

// get all games from db
router.get('/', (req, res) => {
  Game.find({})
    .then(games => {
      res.json(games)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
