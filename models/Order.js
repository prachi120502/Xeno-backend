
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
  amount: DataTypes.FLOAT,
  date: DataTypes.DATE,
});

Order.belongsTo(Customer, { foreignKey: 'customerId', onDelete: 'CASCADE' });
Customer.hasMany(Order, { foreignKey: 'customerId' });

module.exports = Order;
