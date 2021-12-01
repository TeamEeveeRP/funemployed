const db = require('../models/evModel');

const sessionController = {
  startSession(req, res, next) {
    return next();
  },
};

module.exports = sessionController;
