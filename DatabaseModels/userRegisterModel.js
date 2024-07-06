const mongoose = require('mongoose')


const registerSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true,
        unique: true
    },
    
    PhoneNumber: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },

    Role: {
        type: String,
        required: true
    }
})

const RegisterModel = mongoose.model('userRegisterDetails', registerSchema)

module.exports = RegisterModel