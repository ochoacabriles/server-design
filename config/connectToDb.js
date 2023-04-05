const mongoose = require("mongoose");
const { mongoUrl } = require("./environment");

let isConnected = false;

const connectToDb = async () => {
  if (!isConnected) {
    await mongoose.connect(mongoUrl);
    isConnected = true;
  }
};

module.exports = connectToDb;
