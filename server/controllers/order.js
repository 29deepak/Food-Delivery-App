const Order = require('../modals/order')

exports.getAllOrders = async (req, res) => {
    try {
        console.log(req.body)
        const { userId } = req.body;
        const allUserOrders = await Order.findAll({ order: [["updatedAt", "DESC"]], where: { userId: userId, status: 'SUCCESSFULL' } })
        return res.json(allUserOrders)

    } catch (err) {
        return res.status(500).json({ err: err })
    }
}

exports.getAllUserOrders = async (req, res) => {
    try {
        const allUserOrders = await Order.findAll()
        return res.json(allUserOrders)

    } catch (err) {
        return res.status(500).json({ err: err })
    }
}
exports.orderByIdDeliver = async (req, res) => {
    try {
        console.log(req.body)
        const id = req.body.id;
        console.log(id)
        const delivered = {
            isDelivered: true
        }
        const isDelievred = await Order.update(delivered, { where: { id: id } })
        return res.json({ msg: "successfull delivered" })

    } catch (err) {
        return res.status(500).json({ err: err })
    }
}