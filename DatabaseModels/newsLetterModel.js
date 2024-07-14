const mongoose = require('mongoose');

const Newsletter = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    }
}) // Creating a schema for the newsletter model.


const newsLetterModel = mongoose.model('newsLetter', Newsletter)


module.exports = newsLetterModel    // Exporting the model so that it can be used in other files.

