const db = require('../models/evModel');
// const bcrypt = require('bcryptjs');


const cookieController = {
  setSSIDCookie(req, res, next) {
    res.cookie('ssid', res.locals.users._id, { httpOnly: true });
    // console.log('userController.setSSIDCookie succeeded');
    return next();
  },
}

module.exports = cookieController;