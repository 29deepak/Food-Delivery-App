const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizza')
router.get('/allpizza', pizzaController.allPizza)
router.post('/addpizza', pizzaController.addPizza)
router.post('/getpizzabyid', pizzaController.getPizzaById)
router.post("/updatedpizza", pizzaController.updatePizzaById)
router.post("/deletepizza", pizzaController.deletePizzaById)
module.exports = router;