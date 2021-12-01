const db = require('../models/evModel');

const userController = {
  createUser(req, res, next) {
    const { fullName: name, username } = req.body;
    const { hashed } = res.locals;
    const params = [name, username, hashed];
    const createUserQuery =
      'INSERT INTO Users (name, username, password) VALUES ($1, $2, $3) RETURNING (_id, name, username)';

    // TODO un-uglify this
    db.query(createUserQuery, params)
      .then((data) => {
        res.locals = {};
        // TEMP LOGIC
        console.log('inside usercontoller.creatuser');
        const splitData = data.rows[0].row.split(',');
        const user = {
          userId: (res.locals.userId = Number(splitData[0].substring(1))),
          name: (res.locals.name = splitData[1]),
          username: (res.locals.username = splitData[2].substring(
            0,
            splitData[2].length - 1
          )),
          isLoggedIn: true,
        };
        res.locals.user = user;

        return next();
      })
      .catch((err) => next(err));
  },
};

module.exports = userController;
