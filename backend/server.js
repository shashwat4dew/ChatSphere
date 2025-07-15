

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');

// // Load environment variables
// dotenv.config();

// // Initialize Express app and HTTP server
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ['http://localhost:3000', 'http://localhost:5002'], // Your frontend URLs
//     methods: ["GET", "POST"],
//     credentials: true,
//   }
// });

// // Middleware setup
// app.use(cors());
// app.use(express.json()); // Parse JSON bodies

// // Database connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Import models (make sure to create these models in the models folder)
// const Message = require('./models/Message.js'); // Update with your actual model path
// const User = require('./models/User.js'); // Update with your actual model path

// // Routes
// app.use('/api/auth', require('./routes/authRoutes.js')); // Authentication routes
// app.use('/api/chat', require('./routes/chatRoutes.js')); // Chat-related routes

// // Socket.IO for real-time chat functionality
// io.on('connection', (socket) => {
//     console.log(`User connected: ${socket.id}`);
  
//     // Handle joining a room
//     socket.on('joinRoom', ({ room, username }) => {
//       if (!socket.rooms.has(room)) { // Check if the user is already in the room
//         socket.join(room);
//         console.log(`User ${username} (Socket ID: ${socket.id}) joined room: ${room}`);
        
//         // Notify others in the room that a new user joined
//         socket.to(room).emit('userJoined', `${username} joined the room`);
//       } else {
//         console.log(`User ${username} is already in room: ${room}`);
//       }
//     });
  
//     // Handle sending a message
//     socket.on('sendMessage', async (messageData) => {
//       const newMessage = new Message({
//         room: messageData.room,
//         content: messageData.content,
//         sender: messageData.sender,
//         timestamp: new Date(),
//       });
  
//       try {
//         await newMessage.save();
//         io.to(messageData.room).emit('receiveMessage', messageData); // Emit to all in room
//         console.log(`Message sent to room ${messageData.room}:`, messageData);
//       } catch (error) {
//         console.error('Error saving message to MongoDB:', error);
//       }
//     });
  
//     // Handle user disconnect
//     socket.on('disconnect', () => {
//       console.log('User disconnected:', socket.id);
//     });
//   });
  

// // Start server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5002', 'http://localhost:5173'], // Your frontend URLs
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// Middleware setup
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5002', 'http://localhost:5173'],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json()); // Parse JSON bodies

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import models (make sure to create these models in the models folder)
const Message = require('./models/Message.js'); // Update with your actual model path
const User = require('./models/User.js'); // Update with your actual model path

// Routes
app.use('/api/auth', require('./routes/authRoutes.js')); // Authentication routes
app.use('/api/chat', require('./routes/chatRoutes.js')); // Chat-related routes

// Socket.IO for real-time chat functionality
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle joining a room
  socket.on('joinRoom', async ({ room, username }) => {
    socket.join(room);
    console.log(`User ${username} (Socket ID: ${socket.id}) joined room: ${room}`);

    // Retrieve previous messages from the database
    const messages = await Message.find({ room }).sort({ timestamp: 1 });
    
    // Send the previous messages to the newly joined user
    socket.emit('previousMessages', messages);
  });

  // Handle sending a message
  socket.on('sendMessage', async (messageData) => {
    const newMessage = new Message({
      room: messageData.room,
      content: messageData.content,
      sender: messageData.sender, // Make sure this is included
      timestamp: new Date(),
    });
  
    try {
      await newMessage.save(); // Save the message to MongoDB
      io.to(messageData.room).emit('receiveMessage', messageData);
      console.log(`Message sent to room ${messageData.room}:`, messageData);
    } catch (error) {
      console.error('Error saving message to MongoDB:', error);
    }
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
