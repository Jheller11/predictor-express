const express = require('express')
const router = express.Router()
const Game = require('../models/Game')

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
