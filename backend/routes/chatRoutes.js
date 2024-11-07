const express = require('express');
const router = express.Router();
const ChatRoom = require('../models/ChatRoom');

// Get all chat rooms
router.get('/', async (req, res) => {
  try {
    const chatRooms = await ChatRoom.find();
    res.status(200).json(chatRooms);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching chat rooms.' });
  }
});

// Create a new chat room
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const newChatRoom = new ChatRoom({ name });
    await newChatRoom.save();
    res.status(201).json(newChatRoom);
  } catch (err) {
    res.status(500).json({ error: 'Error creating chat room.' });
  }
});

module.exports = router;
