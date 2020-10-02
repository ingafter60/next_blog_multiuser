// import modules
const express = require('express')
const router = express.Router()

// import controller
const {time} = require('../controllers/controller_blog')

router.get('/', time)

module.exports = router
