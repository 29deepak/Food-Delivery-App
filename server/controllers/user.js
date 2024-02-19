const User = require('../modals/user');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (name && email && password) {
            const user = await User.create({ name, email, password })
            return res.status(201).json({ msg: "user created sucessfully" })
        }

    } catch (err) {
        return res.status(500).json(err)
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findAll({ where: { email } })
        console.log(user)
        if (user) {
            if (user[0].password === password) {
                return res.status(200).json(user[0])
            }
        }
    }
    catch (err) {
        return res.status(500).json(err)
    }
}

exports.getALlUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: ["id", "name", "email", "isAdmin"] })
        console.log(users)
        res.status(200).json(users)

    } catch (err) {
        return res.status(500).json(err)
    }
}
exports.deleteUserById = async (req, res) => {
    try {
        const id = req.body.id
        const users = await User.destroy({ where: { id: id } })

        res.status(200).json({ msg: "deleted successfully " })

    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findByPk(userId)
        return res.status(201).json(user)

    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.updateuserById = async (req, res) => {
    try {
        console.log(req.body)
        const updatedUser = req.body;
        let updateUserById = {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        }

        const user = await User.update(updateUserById, { where: { id: updatedUser.id } })

        return res.status(201).json({ msg: "updated successfully" })

    } catch (err) {
        return res.status(500).json(err)
    }
}