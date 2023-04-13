const express = require('express');
const usersRouter = require('./routes/user');
const { port } = require('./config/environment');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
