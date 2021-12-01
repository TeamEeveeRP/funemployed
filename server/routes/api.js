const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const authController = require('../controller/authController');
const dashboardController = require('../controller/dashboardController');
// const cookieController = require('../controller/cookieController');
// const sessionController = require('../controller/sessionController');

router.post(
  '/signup',
  authController.hashPassword,
  userController.createUser,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post(
  '/login',
  authController.verifyUser,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.get(
  '/jobs/:userId',
  // In this first middleware, query to DB to fetch all job cards for 'userid'
  dashboardController.getUserCards,
  // Send as array of objects
  (req, res) => {
    res.status(200).send('in /dashboard');
  }
);

router.post(
  '/jobs/:userid',
  // JSON bbject sent from client
  (req, res) => {
    res.status(200).send('job card added');
  }
);

router.get('/', (req, res) => {
  return res.status(200).send('in /api');
});

module.exports = router;
