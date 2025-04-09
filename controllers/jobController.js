const Job = require('../models/Job');

exports.createJob = (req, res) => {
  const jobData = req.body;
  Job.create(jobData, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Job created', jobId: result.insertId });
  });
};

exports.getJobs = (req, res) => {
  Job.getAll(req.query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};