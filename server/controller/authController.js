const db = require('../models/evModel');
const bcrypt = require('bcryptjs');


const authController = {
  hashPassword(req, res, next) {
    const SALT_WORK_FACTOR = 10;
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    res.locals.hashed = hash;
    return next();
  },
}

module.exports = authController;