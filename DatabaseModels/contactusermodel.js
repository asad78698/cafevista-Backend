const mongoose = require('mongoose')


const ContactuserSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },
    
    PhoneNumber: {
        type: String,
        required: true
    },
    ProjectName: {
        type: String,
        required: true
    },
      
    ProjectDescription: {
        type: String,
        required: true
    }

})

ContactuserModel = mongoose.model('userContactDetails', ContactuserSchema)

module.exports = ContactuserModel