const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  dni: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
