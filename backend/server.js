// import modules
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// use express module to create app
const app = express()

// add middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// use cors to communicate backend and frontend
if(process.env.NODE_ENV == 'development'){
  app.use(cors({ origin: `${process.env.CLIENT_URL}`}))
}

// routes
app.get('/api', (req, res) => {
  res.json({time: Date().toString()})
})

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`The server is running on http://localhost:8000 using PORT ${port}`)
})
