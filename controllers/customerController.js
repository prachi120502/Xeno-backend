
const Customer = require('../models/Customer');

exports.addCustomer = async (req, res) => {
  const { name, email, totalSpending, visits, lastVisit } = req.body;
  const customer = await Customer.create({ name, email, totalSpending, visits, lastVisit });
  res.json(customer);
};
