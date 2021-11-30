const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('in /api')
})

router.post('/login', (req, res) => {
  res.status(200).send('in /api/login')
})

router.post('/signup', (req, res) => {
  res.status(200).send('in /api/signup')
})

module.exports = router;
