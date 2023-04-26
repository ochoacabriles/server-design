const { addSingleUser } = require("../../../dto/user");

module.exports.userMutations = {
  addUser: async (_, { userToAdd }) => await addSingleUser(userToAdd),
};
