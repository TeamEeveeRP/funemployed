const db = require('../models/evModel');

const userController = {
  createUser(req, res, next) {
    const { name, username } = req.body;
    const { hashed } = res.locals;
    const params = [name, username, hashed];
    // console.log('process.env.PG_URI: ', process.env.PG_URI);
    const createUserQuery =
      'INSERT INTO Users (name, username, password) VALUES ($1, $2, $3)';

    db.query(createUserQuery, params)
      .then(data => {
        res.locals = {};
        res.locals.queryData = data;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  },
};

module.exports = userController;
