
const express = require('express');
const campaignController = require('../controllers/campaignController');

const router = express.Router();
router.post('/create', campaignController.createCampaign);
router.patch('/updateStatus', campaignController.updateCampaignStatus);

module.exports = router;
