const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const dotenv = require('dotenv')

const tournamentController = require('./controllers/tournamentController')
const userController = require('./controllers/userController')

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'build')))

app.post('/api/admin/uplaod', async(req, res) => {
  try {
    await tournamentController.importTournament(
      req.body.name,
      req.body.major,
      req.body.competitive,
      req.body.date,
      req.body.hasKnockout,
      req.body.data
    )
    res.sendStatus(200)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.post('/api/admin/delete', async(req, res) => {
  try {
    await tournamentController.deleteTournament(req.body.id)
    res.sendStatus(200)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.post('/api/admin/anonymize', async(req, res) => {
  try {
    await userController.anonymizeUser(req.body.name)
    res.sendStatus(200)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.get('/api/tournaments', async(_, res) => {
  try {
    const json = await tournamentController.getTournaments()
    res.status(200).json(json)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})
app.get('/api/tournament/:id', async(req, res) => {
  try {
    const json = await tournamentController.getTournamentDetail(req.params.id)
    res.status(200).json(json)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})
app.get('/api/ladder', async(_, res) => {
  try {
    const json = await userController.getLadder()
    res.status(200).json(json)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})
app.get('/api/user/:name', async(req, res) => {
  try {
    const json = await userController.getUserDetail(req.params.name)
    res.status(200).json(json)
  }
  catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080)
