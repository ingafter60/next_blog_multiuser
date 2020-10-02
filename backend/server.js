// import modules
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose  = require('mongoose')
require('dotenv').config()

// import route
const blogRoutes = require('./routes/route_blog')

// app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then(() => console.log('DB Connected'))

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors 
if(process.env.NODE_ENV == 'development'){
  app.use(cors({ origin: `${process.env.CLIENT_URL}`}))
}

// routes middleware
app.use('/api', blogRoutes)

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`The server is running on http://localhost:8000 using PORT ${port}`)
})
