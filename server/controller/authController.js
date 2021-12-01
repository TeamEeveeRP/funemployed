const bcrypt = require('bcryptjs');
const db = require('../models/evModel');

const SALT_WORK_FACTOR = 10;
const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

const authController = {
  hashPassword(req, res, next) {
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
        console.log('verifying user')
        console.log()
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          const user = {
            userId: data.rows[0]._id,
            name: data.rows[0].name,
            username: data.rows[0].username,
            isLoggedIn: true,
          };
          res.locals.user = user;

          return next();
        } else {
          return next({ error: 'Incorrect credentials. Please try again.' });
        }
      })
      .catch(err => next(err));
  }, 
};

module.exports = authController;
