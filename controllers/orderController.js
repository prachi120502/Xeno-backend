
const Order = require('../models/Order');
const Customer = require('../models/Customer');

exports.addOrder = async (req, res) => {
  const { customerId, amount, date } = req.body;
  const order = await Order.create({ customerId, amount, date });
  res.json(order);
};
