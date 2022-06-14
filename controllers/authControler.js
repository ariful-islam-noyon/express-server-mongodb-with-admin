const admin = require('../modals/adminModels')
const bcrypt = require('bcryptjs')

// admin login system
const adminLogin = async (req, res) =>{
    
const {email, password} =req.body

// check user email
const loginData= await admin.findOne({email})
   
// validation user

if(!loginData){
    res.status(400).json({
        message: "Email Not match"
    })
}else{

    if( (await bcrypt.compare(password, loginData.password))){
        res.status(200).json({
            message: "Login Successfull"
        })
    }else{
        res.status(400).json({
            message: "Password Is Wrong"
        })
    }
}

    
}


module.exports = {
    adminLogin
}