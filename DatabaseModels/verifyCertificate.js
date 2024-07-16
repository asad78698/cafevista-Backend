const mongoose = require('mongoose');

const verifyCertificate = new mongoose.Schema({
    
    RecipientName:{
        type: String,
    },

    Certificate_ID:{
        type: String,
    },

    Internship_Period:{
        type: String,
    },
    Issuer:{
        type: String,
    },
    
    Position:{
        type: String,
    },

    Certificate_Type:{
        type: String,
    },
    });

const verifyCertificateModel = mongoose.model('verifyCertificate', verifyCertificate)

module.exports = verifyCertificateModel    // Exporting the model so that it can be used in other files.
    