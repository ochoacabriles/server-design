const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const usersRouter = require('./routes/user');
const { port } = require('./config/environment');
const { swaggerSpecs } = require('./docs/config');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

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
