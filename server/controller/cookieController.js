const cookieController = {
  setSSIDCookie(req, res, next) {
    res.cookie('ssid', res.locals.users_id, {
      maxAge: 600000,
      httpOnly: true,
    });

    return next();
  },
};

module.exports = cookieController;
