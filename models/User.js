
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: 'viewer' }
});

module.exports = mongoose.model('User', schema);
