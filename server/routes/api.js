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
    // console.log('logins res.locals.user', res.locals.user);
    return res.status(200).json(res.locals.user);
  }
);

router.post(
  '/jobs/:userId',
  dashboardController.createJobCard,
  dashboardController.getJobCards,
  (req, res) => {
    res.status(200).json(res.locals.cards);
  }
);

router.delete(
  '/jobs/:userId/:cardId',
  dashboardController.deleteJobCard,
  dashboardController.getJobCards,
  (req, res) => {
    res.status(200).json(res.locals.cards);
  }
);

router.get('/jobs/:userId', dashboardController.getJobCards, (req, res) => {
  res.status(200).json(res.locals.cards);
});

// router.get('/', (req, res) => {
//   return res.status(200).send('in /api');
// });

module.exports = router;
