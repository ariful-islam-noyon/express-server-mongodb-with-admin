const bcrypt = require('bcryptjs')
const admin = require('../modals/adminModels')



// get all admin
const getAllAdmin = async(req, res) => {
      
     let data = await admin.find()

    res.status(200).json(data)
}

// get Single admin
const getSingleAdmin = async (req, res) => {

  let id = req.params.id;
  let data = await admin.findById(id)

    res.status(200).json(data)
}
// Create admin
const createAdmin =async (req, res) => {

    const {name, email, username, password, age, skill, location, cell} =  req.body
 
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

 if(!name || !email || !username || !age || !cell || !skill){
    res.status(404).json({
        Message: "All Field Are Required"
    })
 }else{
    let data = await admin.create({
        ...req.body,
        password : hashPass
    })
    res.status(200).json({
        Message: "Data Create Successfull"
    })
 }
}
// Update admin
const updateAdmin = (req, res) => {

    res.status(200).json({
        message : 'Update Admin'
    })
}
// Delete admin
const deleteAdmin =async (req, res) => {

     const deleteData = await admin.findById(req.params.id)

if(!deleteData){
    res.status(400).json({
        message : 'Data Not Found'
    })
}else{
    let data = await admin.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message : `${data.name}, Er Data Delete Succesfull`
    })
}
    
}
module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin

}