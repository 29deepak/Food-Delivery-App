const Razorpay = require('razorpay')
const Order = require('../modals/order')
exports.purchase = async (req, res) => {
    console.log(req.body)
    try {
        const { amount, cartItems, currentUser } = req.body;

        var rzp = new Razorpay({
            key_id: "rzp_test_AnrE3UEN9Iq0BN",
            key_secret: "JZqf5owhPwNSUN891vVCA7Cb"
        })
        rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
            if (err) {
                throw new Error(JSON.stringify(err));
            }

            Order.create({ name: currentUser.name, email: currentUser.email, orderId: order.id, userId: currentUser.id, orderItems: cartItems, shippingAddress: "Bihar", orderAmount: (amount) / 100, isDelivered: false, status: 'PENDING', transactionId: "Not found" }).then(() => {
                return res.json({ order, key_id: rzp.key_id });
            }).catch(err => {
                throw new Error(err)
            })
        })
    } catch (err) {

        res.status(500).json({ message: 'something went wrong', error: err })
    }
}
exports.getUpdate = async (req, res, next) => {
    try {
        console.log(req.body)
        const { payment_id, order_id } = req.body;
        const order = await Order.findOne({ where: { orderId: order_id } })
        order.update({ transactionId: payment_id, isDelivered: false, status: 'SUCCESSFULL' }).then(() => {
            // req.user.update({ ispremiumuser: true }).then(() => {

            //     return res.status(202).json({ success: true, message: "Transaction Successful" })
            // }).catch((err) => {
            //     throw new Error(err);
            // })
            return res.status(202).json({ success: true, message: "Transaction Successful" })
        }).catch((err) => {
            throw new Error(err)
        })

    } catch {
        res.status(500).json({ message: 'something went wrong', error: err })
    }
}