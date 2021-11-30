const express = require('express');

const router = express.Router();

const apiController = require('../controller/apiController');
const authController = require('../controller/authController');
const cookieController = require('../controller/cookieController');
const sessionController = require('../controller/sessionController');

router.post(
  '/login',
  authController.verifyUser, 
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
  res.status(200).send('in /api/login')
})

router.post(
  '/signup',
  apiController.createUser,
  (req, res) => {
  res.status(200).send('in /api/signup')
})

router.get('/', (req, res) => {
  res.status(200).send('in /api')
})

module.exports = router;
