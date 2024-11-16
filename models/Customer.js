
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Customer = sequelize.define('Customer', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  totalSpending: DataTypes.FLOAT,
  visits: DataTypes.INTEGER,
  lastVisit: DataTypes.DATE,
});

module.exports = Customer;
