const express  = require('express')
const route = express.Router()
const {contactForm, register, login} = require('../AuthControllers/authcontrollers')


// All Backend Routes
route.post('/', contactForm)

route.post('/register', register)

route.post('/login', login)


module.exports = route
