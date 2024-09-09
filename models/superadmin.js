const mongoose = require('mongoose');

// SuperAdmin Schema
const superAdminSchema = new mongoose.Schema({
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
    default: 'SuperAdmin',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  }],
  coins_distributed: {
    type: Number,
    default: 0, // Total coins distributed to admins
  },
  payout_history: [{
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
    amount: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  system_logs: [{
    action: String, // Description of actions like 'Added Admin', 'Processed Payout', etc.
    date: {
      type: Date,
      default: Date.now,
    },
  }],
});

const SuperAdmin = mongoose.model('superadmin', superAdminSchema);

module.exports = SuperAdmin;
