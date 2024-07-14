const ContactuserModel = require('../DatabaseModels/contactusermodel')
const RegisterModel = require('../DatabaseModels/userRegisterModel')
const newsLetterModel = require('../DatabaseModels/newsLetterModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//generate token

const generateToken = (user)=>{
    return jwt.sign(
        {id: user._id, 
        email: user.Email, 
        role: user.Role
        }, 
       
        process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
}

//contact form
const contactForm = async (req, res) => {
    const {fullname, email, phonenumber, project, description} = req.body
    try {
        await ContactuserModel.create({
            Fullname: fullname,
            Email: email,
            PhoneNumber: phonenumber,
            ProjectName: project,
            ProjectDescription: description
        })

        res.status(200).json({message: "Data saved successfully"})

    } catch (error) {

        console.log("Error in saving data to database", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}

//register user
const register = async(req, res)=>{

    const{fullname, email, phonenumber, password, role} = req.body
  //check if email already exist

   try {
    //check if email already exist
    const EmailExist = await RegisterModel.findOne({Email: email})
    //if email exist
    if(EmailExist){
        return res.status(400).json({message: "Email already exist"})
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user
    const UserCreated =  await RegisterModel.create({
        Fullname: fullname,
        Email: email,
        PhoneNumber: phonenumber,
        Password: hashedPassword,
        Role: role
    }) 

    //generate token
    const token  = generateToken(UserCreated)

    res.status(200).json({message: "User Registered Successfully", token})
    
   } catch (error) {

    console.log("Error in registering user", error)
    
   }

}
//login user
const login  = async(req, res)=>{
    const {email, password} = req.body

    //check if user exist
    try {
        const CheckUser = await RegisterModel.findOne({Email: email})

        if(!CheckUser){
            return res.status(400).json({message: "Invalid Email or Password"})
        }

        const CheckPassword = await bcrypt.compare(password, CheckUser.Password)

        if(!CheckPassword){
            return res.status(400).json({message: "Invalid Email or Password"})
        }
    //generate token
    
        const token = generateToken(CheckUser)

        res.status(200).json({message: "User Logged in Successfully", token})

    } catch (error) {

        console.log("Error in logging in user", error)

    }
}


const newsletter = async (req, res) => {
    const{email} = req.body

   checkEmail = await newsLetterModel.findOne({Email: email})

   if(checkEmail){
       return res.status(400).json({message: "Email already exist"})
   }

   try {
    await newsLetterModel.create({
        Email: email
    })

    res.status(200).json({message: "Subscribed to newsletter successfully"})
    
   } catch (error) {

    console.log("Error in subscribing to newsletter", error)
    res.status(500).json({message: "Internal Server Error"})
    
   }
}

module.exports = {contactForm, register, login, newsletter}
