const mongoose = require('./connection')
const fetch = require('node-fetch')
require('dotenv').config()
// import game model

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
  json.matches.forEach(match => {
    //   save match to db based on game model (see game.json for match data format)
  })
}

fetchGames()
