const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  referrer_admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Reference to the admin who referred this user
    default: null,
  },
  signup_date: {
    type: Date,
    default: Date.now,
  },
  activities: [{
    type: String, // Log activities the user has completed
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  is_active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
