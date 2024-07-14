const express  = require('express')
const route = express.Router()
const {contactForm, register, login, newsletter} = require('../AuthControllers/authcontrollers')


// All Backend Routes
route.post('/', contactForm)

route.post('/register', register)

route.post('/login', login)

route.post('/newsletter', newsletter)


module.exports = route
