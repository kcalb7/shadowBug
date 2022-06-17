require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { SERVER_HOST = 'localhost', SERVER_PORT = 3000 } = process.env

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(
  cors({
    origin: true, // all origins permitted
    credentials: true
  })
)

const { router } = require('./routes')
router(app)

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.info('=====> Server Online <=====')
  console.info(`http://${SERVER_HOST}:${SERVER_PORT}`)
})
