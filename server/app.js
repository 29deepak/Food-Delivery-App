const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const sequelize = require("./utils/database")
const app = express()
const data = require('./data')
const Pizza = require('./modals/pizza')
const User = require('./modals/user')
const Order = require("./modals/order")
const pizzaRoutes = require('./router/pizza')
const userRoutes = require("./router/user")
const orderRoutes = require('./router/razorpay')
const userOrderRoutes = require('./router/order')

app.use(bodyParser.json())
app.use(cors())
app.use(pizzaRoutes)
app.use(userRoutes)
app.use(orderRoutes)

app.use(userOrderRoutes)



app.use(Pizza)
app.use(User)
app.use(Order)



const server = http.createServer(app).listen(4000)
// async function play() {

//     for (const pizzaData of data) {
//         await Pizza.create({ name: pizzaData.name, variants: pizzaData.varients, prices: pizzaData.prices, category: pizzaData.category, images: pizzaData.images, description: pizzaData.description });
//     }
// }
// play()
sequelize
    .sync()
    .then(() => {
        server
        console.log("connected successfully")

    }).catch((err) => {
        console.log(err)
    })