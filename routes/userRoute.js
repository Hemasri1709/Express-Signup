const express = require('express')
const addSignup = require('../controllers/userController.js')

const router = express.Router()


router.post('/signup', addSignup)

module.exports = router