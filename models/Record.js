
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  amount: Number,
  type: String,
  category: String,
  date: Date,
  notes: String,
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Record', schema);
