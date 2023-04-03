const express = require('express');
const { engine } = require('express-handlebars');

const users = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/user', (req, res) => {
  res.render('home', { users });
});

app.post('/user', (req, res) => {
  const { name, lastname, dni } = req.body;

  console.log({ name, lastname, dni });
  users.push({ name, lastname, dni });

  res.redirect('/user');
});

app.get('/user-json', (req, res) => {
  res.json({ users });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
