const { randomUUID } = require("crypto");
const getDao = require("../dao");

const mapUser = (user) => user
  ? ({
    id: user._id.toString(),
    name: user.name,
    lastname: user.lastname,
    nickname: `${user.name} ${user.lastname}`,
    randomCode: randomUUID(),
  }) : null;

const getUserById = async (id) => {
  const dao = await getDao();
  const user = await dao.getUserById(id);
  return mapUser(user);
};

const getAllUsers = async () => {
  const dao = await getDao();
  const users = await dao.getAllUsers();
  return users.map(user => mapUser(user));
};

const addSingleUser = async (user) => {
  const dao = await getDao();

  const newUser = await dao.addSingleUser({
    ...user,
    createdAt: new Date(),
  });

  return mapUser(newUser);
};

module.exports = { getUserById, getAllUsers, addSingleUser };
