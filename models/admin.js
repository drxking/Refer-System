const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema({
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
  role: {
    type: String,
    default: 'Admin',
  },
  referral_link: {
    type: String,
    unique: true,
  },
  referred_users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assume there's a separate User model to represent referred users
  }],
  coins_earned: {
    type: Number,
    default: 0,
  },
  coin_history: [{
    amount: Number,
    date: {
      type: Date,
      default: Date.now,
    },
    action: {
      type: String, // Action like 'Referral', 'Bonus', etc.
    },
  }],
  payout_requests: [{
    amount: Number,
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    date_requested: {
      type: Date,
      default: Date.now,
    },
    date_processed: Date,
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;
