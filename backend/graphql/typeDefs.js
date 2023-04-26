module.exports.typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    lastname: String!
    nickname: String!
    randomCode: String!
  }

  input UserToAdd {
    name: String!
    lastname: String!
    dni: String!
  }

  type Query {
    users: [User]!
    user(userId: ID!): User!
  }

  type Mutation {
    addUser(userToAdd: UserToAdd!): User!
  }
`;
