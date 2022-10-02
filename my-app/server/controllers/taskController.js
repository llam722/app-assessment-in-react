const models = require('../models/TaskModel');

module.exports = {
  getTask(req, res, next) {
    models.Task.find({})
      .then((response) => {
        res.locals.tasks = response;
        return next();
      })
      .catch((err) => {
        console.log('getTask error', err);
        return next(err);
      });
  },

  //end of getTask

  postTask(req, res, next) {
    const { task } = req.body;
    const time = Date.now().toString();
    models.Task.create({ item: task, created_at: time })
      .then((response) => {
        console.log(response);
        res.locals.item = response;
        return next();
      })
      .catch((err) => {
        console.log('postTask error', err);
        return next(err);
      });
  },

  //end of postTask
};
