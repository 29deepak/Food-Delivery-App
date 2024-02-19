const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/getallusers', userController.getALlUsers)
router.post('/deleteuser', userController.deleteUserById)
router.post("/getuserbyid", userController.getUserById)
router.post('/updateuserbyid', userController.updateuserById)


module.exports = router