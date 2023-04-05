const User = require('../schemas/user');

const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

const addSingleUser = async (user) => {
  const newUser = new User(user);
  await newUser.save();
  return user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

module.exports = { getAllUsers, addSingleUser, getUserById };
