// import packages
const app = require('express')()
const parser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

// import controllers

// config middleware
app.use(helmet())
app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

// test route
app.get('/', (req, res) => {
  res.send('Entry point')
})

// fix later to deploy
app.set('port', 3001)

app.listen(app.get('port'), () => {
  console.log(`App running on port: ${app.get('port')}`)
})
