const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const AllRoutes = require('./Routes/allroute')
const ContactuserModel = require('./DatabaseModels/contactusermodel')

//Mongodb Connection
mongoose.connect(process.env.MONGODB_URI,).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Error in connecting to database", err)
})


//middlewares
<<<<<<< Updated upstream:index.js
app.use(cors({
    origin: "https://cafevista-frontend.vercel.app",
=======
app.use(cors({  
    origin: "https://cafevista-frontend.vercel.app/home",
>>>>>>> Stashed changes:server.js
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
   
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//import routes
app.use(AllRoutes)


