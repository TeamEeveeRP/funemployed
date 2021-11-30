const cookieController = {
  setSSIDCookie(req, res, next) {
    res.cookie('ssid', res.locals.users._id, {
      maxAge: 600000,
      httpOnly: true,
    });
    // console.log('userController.setSSIDCookie succeeded');
    return next();
  },
};

module.exports = cookieController;
