const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const Pizza = sequelize.define('pizza', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    variants: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
    },
    prices: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    images: {
        type: Sequelize.STRING, // Assuming you store image URLs as strings
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Pizza;