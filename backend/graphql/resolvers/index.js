const { userMutations } = require("./user/mutations");
const { userQueries } = require("./user/queries");

module.exports.resolvers = {
  Query: {
    ...userQueries,
  },

  Mutation: {
    ...userMutations,
  },
};