// import modules
const express = require('express')
const router = express.Router()

// import controller
const {signup} = require('../controllers/controller_auth')

// validators
const { runValidation } = require('../validators');
const { userSignupValidator } = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router

