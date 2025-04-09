const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController'); // ✅ Correct import path
console.log("Job Controller:", jobController);
router.post('/', jobController.createJob);
router.get('/', jobController.getJobs);

module.exports = router;