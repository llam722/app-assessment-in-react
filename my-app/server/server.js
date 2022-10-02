const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const taskController = require('./controllers/taskController');
const cors = require('cors');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/tasks', taskController.getTask, (req, res) => {
  res.status(200).json(res.locals.tasks);
});

app.post('/tasks', taskController.postTask, (req, res) => {
  res.status(200).json(res.locals.item);
});

app.delete('/tasks', taskController.deleteTask, (req, res) => {
  res.status(200).json(res.locals.deletedTask);
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
});

app.use('*', (err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} ...`);
});
