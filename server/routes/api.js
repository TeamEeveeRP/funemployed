const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const authController = require('../controller/authController');
const cookieController = require('../controller/cookieController');
const sessionController = require('../controller/sessionController');

router.post(
  '/signup',
  authController.hashPassword,
  userController.createUser,
  // TODO:
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.status(200).send('in /api/signup');
  }
);

// router.post(
//   '/login',
//   authController.verifyUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     res.status(200).send('in /api/login');
//   }
// );

// router.get(
//   '/dashboard/:userid',
//   // In this first middleware, query to DB to fetch all job cards for 'userid'
//   // Send as array of objects
//   (req, res) => {
//     res.status(200).send('in /dashboard');
//   }
// );

// router.post(
//   '/jobs/:userid',
//   // JSON bbject sent from client
//   (req, res) => {
//     res.status(200).send('job card added');
//   }
// )

router.get('/', (req, res) => {
  res.status(200).send('in /api');
});

module.exports = router;
