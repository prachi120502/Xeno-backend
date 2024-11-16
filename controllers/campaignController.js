
const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  const { audienceId, message } = req.body;
  const campaign = await Campaign.create({ audienceId, message, status: 'PENDING', createdAt: new Date() });
  res.json(campaign);
};

exports.updateCampaignStatus = async (req, res) => {
  const { campaignId, status } = req.body;
  await Campaign.update({ status }, { where: { id: campaignId } });
  res.json({ message: 'Status updated' });
};
