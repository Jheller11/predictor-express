const mongoose = require('./connection')
const fetch = require('node-fetch')
require('dotenv').config()
// import game model
const Game = require('../models/Game')

async function fetchGames() {
  let data = await fetch(
    'http://api.football-data.org/v2/competitions/2021/matches',
    {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_KEY
      }
    }
  )
  let json = await data.json()
  Game.deleteMany({}).then(() => {
    console.log('Games deleted.')
  })
  json.matches.forEach(match => {
    Game.create({
      id: match.id,
      date: match.utcDate,
      matchday: match.matchday,
      status: match.status,
      homeTeam: {
        name: match.homeTeam.name,
        score: match.score.fullTime.homeTeam
      },
      awayTeam: {
        name: match.awayTeam.name,
        score: match.score.fullTime.awayTeam
      }
    })
      .then(game => {
        console.log(`Game ${game.id} saved to DB.`)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

fetchGames()
