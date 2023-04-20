const mongoose = require('mongoose');
const User = require('../schemas/user');
const { mongoUrl } = require('../config/environment');

class MongoClient {
  async connect() {
    // Connect to the database
    await mongoose.connect(mongoUrl);
  }

  getAllUsers = async () => {
    const users = await User.find({});
    return users;
  };
  
  addSingleUser = async (user) => {
    const newUser = new User(user);
    await newUser.save();
    return newUser;
  };
  
  getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
  };

  clear = async () => {
    // Not implemented for security reasons
    // await User.deleteMany({});
  };
}

module.exports = MongoClient;
