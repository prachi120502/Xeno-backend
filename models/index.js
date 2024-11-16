const { sequelize } = require('../config/db'); // Import sequelize
const Customer = require('./Customer'); // Import Customer model
const Order = require('./Order');       // Import Order model

// Define associations
Customer.hasMany(Order, { foreignKey: 'customerId', onDelete: 'CASCADE' });
Order.belongsTo(Customer, { foreignKey: 'customerId', onDelete: 'CASCADE' });

// Export models and sequelize instance
module.exports = {
  sequelize,
  Customer,
  Order,
};
