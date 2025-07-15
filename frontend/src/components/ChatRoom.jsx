

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import { v4 as uuidv4 } from 'uuid';
// import MessageInput from './MessageInput.js';

// const socket = io.connect("http://localhost:5000");

// function ChatRoom({ room, username }) {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.emit('joinRoom', { room, username });

//     const handleMessage = (message) => {
//       // Handle received message
//       setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     const handlePreviousMessages = (previousMessages) => {
//       // Set previous messages when the user joins
//       setMessages(previousMessages);
//     };

//     socket.on('receiveMessage', handleMessage);
//     socket.on('previousMessages', handlePreviousMessages);

//     // Cleanup to remove the event listeners when the component unmounts
//     return () => {
//       socket.off('receiveMessage', handleMessage);
//       socket.off('previousMessages', handlePreviousMessages);
//     };
//   }, [room, username]);

//   const sendMessage = (messageContent) => {
//     const messageData = {
//       room,
//       content: messageContent,
//       sender: username,
//       id: uuidv4(),
//     };

//     socket.emit('sendMessage', messageData); // Emit the message to the server
//     // Do not add the message to local state here
//   };

//   return (
//     <div>
//       <h2>{room} Chat Room</h2>
//       <div>
//         {messages.map((msg) => (
//           <p key={msg.id}>
//             <strong>{msg.sender || 'Anonymous'}:</strong> {msg.content}
//           </p>
//         ))}
//       </div>
//       <MessageInput onSend={sendMessage} />
//     </div>
//   );
// }

// export default ChatRoom;

// // import React, { useState, useEffect } from 'react';
// // import io from 'socket.io-client';
// // import { v4 as uuidv4 } from 'uuid';
// // import MessageInput from './MessageInput.js';
// // import './ChatRoom.css'; // Import the CSS file

// // const socket = io.connect("http://localhost:5000");

// // function ChatRoom({ room, username }) {
// //   const [messages, setMessages] = useState([]);

// //   useEffect(() => {
// //     socket.emit('joinRoom', { room, username });

// //     const handleMessage = (message) => {
// //       setMessages((prevMessages) => [...prevMessages, message]);
// //     };

// //     const handlePreviousMessages = (previousMessages) => {
// //       setMessages(previousMessages);
// //     };

// //     socket.on('receiveMessage', handleMessage);
// //     socket.on('previousMessages', handlePreviousMessages);

// //     return () => {
// //       socket.off('receiveMessage', handleMessage);
// //       socket.off('previousMessages', handlePreviousMessages);
// //     };
// //   }, [room, username]);

// //   const sendMessage = (messageContent) => {
// //     const messageData = {
// //       room,
// //       content: messageContent,
// //       sender: username,
// //       id: uuidv4(),
// //     };

// //     socket.emit('sendMessage', messageData);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.roomTitle}>{room} Chat Room</h2>
// //       <div style={styles.messageContainer}>
// //         {messages.map((msg) => (
// //           <div key={msg.id} style={styles.messageBubble(msg.sender === username)}>
// //             <strong>{msg.sender || 'Anonymous'}:</strong> {msg.content}
// //           </div>
// //         ))}
// //       </div>
// //       <MessageInput onSend={sendMessage} />
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'flex-start',
// //     alignItems: 'center',
// //     height: '100vh',
// //     backgroundColor: '#f4f4f4',
// //     padding: '20px',
// //   },
// //   roomTitle: {
// //     marginBottom: '20px',
// //     fontSize: '24px',
// //     color: '#333',
// //   },
// //   messageContainer: {
// //     width: '100%',
// //     maxHeight: '400px',
// //     overflowY: 'auto',
// //     padding: '10px',
// //     border: '1px solid #ccc',
// //     borderRadius: '8px',
// //     backgroundColor: '#fff',
// //     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// //     marginBottom: '20px',
// //   },
// //   messageBubble: (isSender) => ({
// //     backgroundColor: isSender ? '#d1e7dd' : '#e2e3e5',
// //     color: isSender ? '#0f5132' : '#000',
// //     padding: '10px',
// //     borderRadius: '20px',
// //     margin: '5px 0',
// //     alignSelf: isSender ? 'flex-end' : 'flex-start',
// //     maxWidth: '80%',
// //     wordWrap: 'break-word',
// //   }),
// // };

// // export default ChatRoom;

// import React, { useState, useEffect, useCallback } from 'react';
// import io from 'socket.io-client';
// import { v4 as uuidv4 } from 'uuid';
// import MessageInput from './MessageInput.js';

// const socket = io.connect("http://localhost:5000");

// function ChatRoom({ room, username }) {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.emit('joinRoom', { room, username });

//     const handleMessage = (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     const handlePreviousMessages = (previousMessages) => {
//       setMessages(previousMessages);
//     };

//     socket.on('receiveMessage', handleMessage);
//     socket.on('previousMessages', handlePreviousMessages);

//     return () => {
//       socket.off('receiveMessage', handleMessage);
//       socket.off('previousMessages', handlePreviousMessages);
//       socket.emit('leaveRoom', { room, username }); // Optional: notify the server that the user is leaving the room
//     };
//   }, [room, username]);

//   const sendMessage = useCallback((messageContent) => {
//     const messageData = {
//       room,
//       content: messageContent,
//       sender: username,
//       id: uuidv4(),
//     };
  
//     console.log('Sending message:', messageData); // Debug log
  
//     socket.emit('sendMessage', messageData, (error) => {
//       if (error) {
//         console.error('Message send error:', error);
//       } else {
//         console.log('Message sent successfully'); // Debug log
//       }
//     });
//   }, [room, username]);
  

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.roomTitle}>{room} Chat Room</h2>
//       <div style={styles.messageContainer}>
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} message={msg} isSender={msg.sender === username} />
//         ))}
//       </div>
//       <MessageInput onSend={sendMessage} />
//     </div>
//   );
// }

// const MessageBubble = React.memo(({ message, isSender }) => {
//   return (
//     <div style={styles.messageBubble(isSender)}>
//       <strong>{message.sender || 'Anonymous'}:</strong> {message.content}
//     </div>
//   );
// });

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//   },
//   roomTitle: {
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   messageContainer: {
//     width: '100%',
//     maxHeight: '400px',
//     overflowY: 'auto',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//   },
//   messageBubble: (isSender) => ({
//     backgroundColor: isSender ? '#d1e7dd' : '#e2e3e5',
//     color: isSender ? '#0f5132' : '#000',
//     padding: '10px',
//     borderRadius: '20px',
//     margin: '5px 0',
//     alignSelf: isSender ? 'flex-end' : 'flex-start',
//     maxWidth: '80%',
//     wordWrap: 'break-word',
//   }),
// };

// export default ChatRoom;


// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import io from 'socket.io-client';
// import { v4 as uuidv4 } from 'uuid';
// import MessageInput from './MessageInput.js';

// const socket = io.connect("http://localhost:5000");

// function ChatRoom({ room, username }) {
//   const [messages, setMessages] = useState([]);
//   const messageContainerRef = useRef(null);

//   useEffect(() => {
//     socket.emit('joinRoom', { room, username });

//     const handleMessage = (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     const handlePreviousMessages = (previousMessages) => {
//       setMessages(previousMessages);
//     };

//     socket.on('receiveMessage', handleMessage);
//     socket.on('previousMessages', handlePreviousMessages);

//     return () => {
//       socket.off('receiveMessage', handleMessage);
//       socket.off('previousMessages', handlePreviousMessages);
//       socket.emit('leaveRoom', { room, username });
//     };
//   }, [room, username]);

//   useEffect(() => {
//     if (messageContainerRef.current) {
//       messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
//     }
//   }, [messages]); // Scroll to the bottom when messages are updated

//   const sendMessage = useCallback((messageContent) => {
//     const messageData = {
//       room,
//       content: messageContent,
//       sender: username,
//       id: uuidv4(),
//     };

//     console.log('Sending message:', messageData);

//     socket.emit('sendMessage', messageData, (error) => {
//       if (error) {
//         console.error('Message send error:', error);
//       } else {
//         console.log('Message sent successfully');
//       }
//     });
//   }, [room, username]);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.roomTitle}>{room} Chat Room</h2>
//       <div style={styles.messageContainer} ref={messageContainerRef}>
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} message={msg} isSender={msg.sender === username} />
//         ))}
//       </div>
//       <MessageInput onSend={sendMessage} />
//     </div>
//   );
// }

// const MessageBubble = React.memo(({ message, isSender }) => {
//   return (
    
    
//     <div style={styles.messageBubble(isSender)}>
//       <strong>{message.sender || 'Anonymous'}:</strong> {message.content}
//     </div>
    
//   );
// });

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//   },
//   roomTitle: {
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   messageContainer: {
//     width: '100%',
//     maxHeight: '400px',
//     overflowY: 'auto',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//   },
//   messageBubble: (isSender) => ({
//     backgroundColor: isSender ? '#d1e7dd' : '#e2e3e5',
//     color: isSender ? '#0f5132' : '#000',
//     padding: '10px',
//     borderRadius: '20px',
//     margin: '5px 0',
//     alignSelf: isSender ? 'flex-end' : 'flex-start',
//     maxWidth: '80%',
//     wordWrap: 'break-word',
//   }),
// };

// export default ChatRoom;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import MessageInput from './MessageInput.jsx';

const socket = io.connect("http://localhost:5000");

function ChatRoom({ room, username }) {
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    socket.emit('joinRoom', { room, username });

    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handlePreviousMessages = (previousMessages) => {
      setMessages(previousMessages);
    };

    socket.on('receiveMessage', handleMessage);
    socket.on('previousMessages', handlePreviousMessages);

    return () => {
      socket.off('receiveMessage', handleMessage);
      socket.off('previousMessages', handlePreviousMessages);
      socket.emit('leaveRoom', { room, username });
    };
  }, [room, username]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scroll to the bottom when messages are updated

  const sendMessage = useCallback((messageContent) => {
    const messageData = {
      room,
      content: messageContent,
      sender: username,
      id: uuidv4(),
    };

    console.log('Sending message:', messageData);

    socket.emit('sendMessage', messageData, (error) => {
      if (error) {
        console.error('Message send error:', error);
      } else {
        console.log('Message sent successfully');
      }
    });
  }, [room, username]);

  return (
    <div style={styles.container}>
      <h2 style={styles.roomTitle}>{room} Chat Room</h2>
      <div style={styles.messageContainer} ref={messageContainerRef}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} isSender={msg.sender === username} />
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
}

const MessageBubble = React.memo(({ message, isSender }) => {
  return (
    <div style={styles.messageBubble(isSender)}>
      <strong>{message.sender || 'Anonymous'}:</strong> {message.content}
    </div>
  );
});

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     height: '90vh',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//   },
//   roomTitle: {
//     marginBottom: '10px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   messageContainer: {
//     width: '90%',
//     maxHeight: '400px',
//     overflowY: 'auto',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//   },
//   messageBubble: (isSender) => ({
//     backgroundColor: isSender ? '#d1e7dd' : '#e2e3e5',
//     color: isSender ? '#0f5132' : '#000',
//     padding: '10px',
//     borderRadius: '20px',
//     margin: '5px 50px',
//     alignSelf: isSender ? 'flex-end' : 'flex-start',
//     maxWidth: '90%',
//     wordWrap: 'break-word',
//     display: 'flex',
//     justifyContent: isSender ? 'flex-end' : 'flex-start',
//   }),
// };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#1E1E2F',
    padding: '20px',
  },
  roomTitle: {
    marginBottom: '10px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#ECEFF4',
  },
  messageContainer: {
    width: '100%',
    maxHeight: '60vh',
    overflowY: 'auto',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#2A2A3D',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    marginBottom: '20px',
  },
  messageBubble: (isSender) => ({
    backgroundColor: isSender ? '#4C566A' : '#3B4252',
    color: isSender ? '#A3BE8C' : '#D8DEE9',
    padding: '10px 15px',
    borderRadius: '18px',
    margin: '8px 10px',
    alignSelf: isSender ? 'flex-end' : 'flex-start',
    maxWidth: '75%',
    wordWrap: 'break-word',
    display: 'flex',
    justifyContent: isSender ? 'flex-end' : 'flex-start',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  }),
};


export default ChatRoom;
[]