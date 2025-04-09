// routes/jobs.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.createJob);
router.get('/', jobController.getJobs);

module.exports = router; // ✅ Make sure this line exists
