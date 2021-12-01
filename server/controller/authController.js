const bcrypt = require('bcryptjs');
const db = require('../models/evModel');

const authController = {
  hashPassword(req, res, next) {
    const SALT_WORK_FACTOR = 10;
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    res.locals.hashed = hash;
    return next();
  },

  verifyUser(req, res, next) {
    const { username, password } = req.body;
    const verifyCredQuery = 'SELECT * FROM Users WHERE username = $1';

    db.query(verifyCredQuery, [username])
      .then(data => {
        const user = data.rows[0];
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          const user = {
            userId: user._id,
            name: user.name,
            username: user.username,
            isLoggedIn: true,
          };
          res.locals.user = user;

          return next();
        }

        return next({ error: 'Username and/or Password is incorrect' });
      })
      .catch(err => {
        return next(err);
      });
  },
};

module.exports = authController;
