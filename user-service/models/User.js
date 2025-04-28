const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  }
}, {
  timestamps: true // created & updated 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
