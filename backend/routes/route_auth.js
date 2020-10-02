// import modules
const express = require('express')
const router = express.Router()

// import controller
const {signup} = require('../controllers/controller_auth')

router.post('/', signup)

module.exports = router