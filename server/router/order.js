const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order')

router.post('/allorders', orderController.getAllOrders)
router.get('/alluserorders', orderController.getAllUserOrders)
router.post('/orderdelivered', orderController.orderByIdDeliver)

module.exports = router