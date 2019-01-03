const mongoose = require('./connection')
const fetch = require('node-fetch')
require('dotenv').config()

async function fetchGames() {
  console.log(process.env.FOOTBALL_DATA_KEY)
  let data = await fetch(
    'http://api.football-data.org/v2/competitions/2021/matches',
    {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_KEY
      }
    }
  )
  let json = await data.json()
  console.log(json.matches[0])
}

fetchGames()
