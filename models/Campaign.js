
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Campaign = sequelize.define('Campaign', {
  audienceId: DataTypes.STRING,
  message: DataTypes.TEXT,
  status: DataTypes.ENUM('PENDING', 'SENT', 'FAILED'),
  createdAt: DataTypes.DATE,
});

module.exports = Campaign;
