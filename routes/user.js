const { Router } = require('express');
const { addUser, getUsers, getUser } = require('../controllers/user');

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const users = await getUsers();
  console.log(JSON.stringify(users, null, 2));
  res.render('home', { users });
});

usersRouter.post('/', async (req, res) => {
  await addUser(req.body);

  const users = await getUsers();
  res.render('home', { users });
});

usersRouter.get('/json', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

usersRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
  
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = usersRouter;
