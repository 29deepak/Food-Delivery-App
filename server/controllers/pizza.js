const Pizza = require('../modals/pizza')
exports.allPizza = async (req, res) => {
    try {
        const allPizzaItems = await Pizza.findAll()
        // console.log(allPizzaItems)
        return res.status(200).json(allPizzaItems)

    } catch (err) {
        return res.status(500).json({ err: err })
    }
}
exports.addPizza = async (req, res) => {
    try {

        const pizza = req.body;
        console.log(pizza)
        let pizzaItems = {
            name: pizza.name,
            variants: ["small", "medium", "large"],
            prices: [pizza.prices],
            category: pizza.category,
            images: pizza.image,
            description: pizza.description
        }
        console.log(pizzaItems)
        await Pizza.create(pizzaItems)
        return res.status(201).json({ msg: "successfully" })


    } catch (err) {
        return res.status(500).json({ err: err })
    }
}

exports.getPizzaById = async (req, res) => {
    console.log("fncmcmc", req.body)
    const { pizzaId } = req.body;
    try {
        console.log("fvhcmxc m", req.body)
        const pizzaItemById = await Pizza.findByPk(pizzaId)
        // console.log(pizzaItemById)
        return res.status(201).json(pizzaItemById)

    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
}

exports.updatePizzaById = async (req, res) => {
    try {
        const updatePizza = req.body;
        let updatePizzaItems = {
            name: updatePizza.name,
            variants: ["small", "medium", "large"],
            prices: [updatePizza.prices],
            category: updatePizza.category,
            images: updatePizza.image,
            description: updatePizza.description
        }

        console.log("------------------------------------------------------")
        const updatedRecord = await Pizza.update(updatePizzaItems, { where: { id: updatePizza.id } });
        console.log("update", updatedRecord)


    } catch (err) {
        return res.status(500).json({ err: err })
    }
}
exports.deletePizzaById = async (req, res) => {
    try {
        console.log(req.body)
        const { pizzaId } = req.body;
        await Pizza.destroy({
            where: { id: pizzaId }
        });
        return res.status(200).json({ msg: "Deleted successfully" });


    } catch (err) {
        return res.status(500).json({ err: err })
    }
}