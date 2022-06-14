const express = require('express')
const router = express.Router();

const {getAllAdmin, getSingleAdmin, updateAdmin, deleteAdmin, createAdmin} = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authControler');

// get all admins
router.get('/', getAllAdmin);
router.post('/', createAdmin);
router.get('/:id', getSingleAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);


router.post('/login', adminLogin)



module.exports = router;