const { randomUUID } = require('crypto');

let users = [];

class MemoryClient {
  async connect() {
    // Connect to the database
    console.log('No connection needed for memory client');
  }

  getAllUsers = async () => {
    return users;
  };
  
  addSingleUser = async (user) => {
    const newUser = { _id: randomUUID(), ...user };
    users.push(newUser);
    return newUser;
  };
  
  getUserById = async (id) => {
    const user = users.find((user) => user.id === id);
    return user;
  };

  clear = async () => {
    users = [];
  };
}

module.exports = MemoryClient;
