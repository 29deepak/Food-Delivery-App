const express = require('express')
const router = express.Router();
const razorpayController = require('../controllers/razorpay')
router.post('/purchase', razorpayController.purchase)
router.post('/updatetransactionstatus', razorpayController.getUpdate)


module.exports = router;