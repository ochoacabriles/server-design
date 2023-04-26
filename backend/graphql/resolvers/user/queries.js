const { getAllUsers, getUserById } = require("../../../dto/user");

module.exports.userQueries = {
  users: async () => await getAllUsers(),
  user: async (_, { userId }) => await getUserById(userId),
};
