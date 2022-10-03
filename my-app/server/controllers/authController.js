module.exports = {
  createUser(req, res, next) {
    const { user, pass } = req.body;
    if (user === 'codesmith' || pass === 'ilovetesting') {
      res.cookie('token', 'admin', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
      });
      return next();
    } else {
      res.send('unsuccessful login attempt');
    }
  },

  verifyUser(req, res, next) {
    if (res.cookies.token) {
      return next();
    } else {
      res.send('You must be signed in to view this page');
    }
  },
};
