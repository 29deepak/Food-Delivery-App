const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    orderId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    orderItems: {
        type: Sequelize.JSON,
        default: []
    },
    shippingAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    orderAmount: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDelivered: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    transactionId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Order;