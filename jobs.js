const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

module.exports = router;