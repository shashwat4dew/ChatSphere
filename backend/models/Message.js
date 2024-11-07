// models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  room: { type: String, required: true },
  sender: { type: String, required: true }, // Add sender field
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
