const mongoose = require('../db/connection')

const gamePredictionSchema = new mongoose.Schema({
  gameId: {
    type: Number,
    required: true
  },
  homeTeamScore: {
    type: Number,
    required: true
  },
  awayTeamScore: {
    type: Number,
    required: true
  }
})

const weekPredictionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  scorePredictions: [gamePredictionSchema]
})

module.exports = mongoose.model('Prediction', weekPredictionSchema)
