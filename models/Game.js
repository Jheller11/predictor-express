const mongoose = require('../db/connection')

const gameSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true
  },
  matchday: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  homeTeam: {
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number
    }
  },
  awayTeam: {
    name: {
      type: String,
      required: true
    },
    score: {
      type: Number
    }
  }
})

module.exports = mongoose.model('Game', gameSchema)
