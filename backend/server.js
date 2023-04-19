const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/user');
const { port } = require('./config/environment');

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  if (err.message === 'Invalid user') {
    res.status(400).send('Invalid user');
    return;
  }

  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
