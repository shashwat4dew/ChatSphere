// // import React, { useState } from 'react';
// // import InterestSelector from './components/InterestSelector.js';
// // import ChatRoom from './components/ChatRoom.js';

// // function App() {
// //   const [username, setUsername] = useState('');
// //   const [selectedRoom, setSelectedRoom] = useState(null);
// //   const [isUsernameSet, setIsUsernameSet] = useState(false);

// //   const handleUsernameSubmit = (e) => {
// //     e.preventDefault();
// //     if (username.trim()) {
// //       setIsUsernameSet(true); // Update the flag to move to the next screen
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {!isUsernameSet ? (
// //         <form onSubmit={handleUsernameSubmit} style={styles.form}>
// //           <h1>Welcome to the Chat Application!</h1>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             placeholder="Enter your username"
// //             required
// //             style={styles.input}
// //           />
// //           <button type="submit" style={styles.button}>Join Chat</button>
// //         </form>
// //       ) : !selectedRoom ? (
// //         <InterestSelector onSelectRoom={setSelectedRoom} />
// //       ) : (
// //         <ChatRoom room={selectedRoom} username={username} />
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// //     backgroundColor: '#f0f0f0',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     background: 'white',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// //   },
// //   input: {
// //     padding: '10px',
// //     margin: '10px 0',
// //     border: '1px solid #ccc',
// //     borderRadius: '4px',
// //     width: '200px',
// //   },
// //   button: {
// //     padding: '10px 15px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// // };

// // export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import InterestSelector from './components/InterestSelector';
// // import ChatRoom from './components/ChatRoom';

// // function App() {
// //   const [username, setUsername] = useState('');
// //   const [selectedRoom, setSelectedRoom] = useState(null);

// //   const handleUsernameSubmit = (usernameInput) => {
// //     setUsername(usernameInput);
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<UsernameForm onSubmit={handleUsernameSubmit} />} />
// //         <Route path="/interests" element={<InterestSelector onSelectRoom={setSelectedRoom} />} />
// //         <Route path="/chat" element={<ChatRoom room={selectedRoom} username={username} />} />
// //         <Route path="*" element={<Navigate to="/" />} /> {/* Redirects to home for unknown routes */}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // const UsernameForm = ({ onSubmit }) => {
// //   const [username, setUsername] = useState('');
  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (username.trim()) {
// //       onSubmit(username);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <h1>Welcome to the Chat Application!</h1>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           placeholder="Enter your username"
// //           required
// //           style={styles.input}
// //         />
// //         <button type="submit" style={styles.button}>Join Chat</button>
// //       </form>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// //     backgroundColor: '#f0f0f0',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     background: 'white',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// //   },
// //   input: {
// //     padding: '10px',
// //     margin: '10px 0',
// //     border: '1px solid #ccc',
// //     borderRadius: '4px',
// //     width: '200px',
// //   },
// //   button: {
// //     padding: '10px 15px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// // };

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import InterestSelector from './components/InterestSelector.js';
// import ChatRoom from './components/ChatRoom.js';

// import './app.css';
// function App() {
//   const [username, setUsername] = useState('');
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<UsernameForm onSubmit={setUsername} />} />
//         <Route path="/interests" element={<InterestSelector onSelectRoom={setSelectedRoom} />} />
//         <Route path="/chat" element={<ChatRoom room={selectedRoom} username={username} />} />
//         <Route path="*" element={<Navigate to="/" />} /> {/* Redirects to home for unknown routes */}
//       </Routes>
//     </Router>
//   );
// }

// const UsernameForm = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       onSubmit(username);
//       navigate('/interests'); // Navigate to the interests page
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h1>Welcome to the Chat Application!</h1>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter your username"
//           required
//           style={styles.input}
//         />
//         <button type="submit" class='btn'>Join Chat</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
    
//     display: 'flex',
//     //flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#387478',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     fontFamily: 'Verdana, Geneva, sans-serif',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     background: '#243642',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//   },
//   input: {
//     padding: '10px 25px',
//     margin: '10px 0',
//     border: '2px solid #191970',
//     borderRadius: '10px',
//     width: '190px',
//     color: 'white',
//     background: 'transparent',

//   },
  
// };


// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import InterestSelector from './components/InterestSelector.jsx';
import ChatRoom from './components/ChatRoom.jsx';

import './app.css';
function App() {
  const [username, setUsername] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameForm onSubmit={setUsername} />} />
        <Route path="/interests" element={<InterestSelector onSelectRoom={setSelectedRoom} />} />
        <Route path="/chat" element={<ChatRoom room={selectedRoom} username={username} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username);
      navigate('/interests');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Welcome to the Chat Application!</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Join Chat</button>
      </form>
    </div>
  );
};

// return (
//   <div style={styles.container}>
//     <div style={styles.chatWindow}>
//       <h2 style={styles.roomTitle}>{room} Chat Room</h2>
//       <div style={styles.messageContainer} ref={messageContainerRef}>
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} message={msg} isSender={msg.sender === username} />
//         ))}
//       </div>
//       <MessageInput onSend={sendMessage} />
//     </div>
//   </div>
// );
// };


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1E1E2F',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(145deg, #2A2A3D, #1A1A2E)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  title: {
    color: '#ECEFF4',
    marginBottom: '20px',
    fontSize: '1.5em',
    fontWeight: '600',
  },
  input: {
    padding: '12px 20px',
    margin: '15px 0',
    border: '1px solid #3A3A4A',
    borderRadius: '8px',
    width: '200px',
    color: '#ECEFF4',
    backgroundColor: '#2E2E3D',
    outline: 'none',
    fontSize: '1em',
    transition: 'border 0.2s ease-in-out',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#5C5CE6',
    color: '#ECEFF4',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1em',
    boxShadow: '0 4px 12px rgba(92, 92, 230, 0.4)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  },
};

// Button Hover Effect
styles.button[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 5px 15px rgba(92, 92, 230, 0.6)',
};

// Input Focus Effect
styles.input[':focus'] = {
  border: '1px solid #5C5CE6',
};

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh', // Full viewport height to center vertically
//     backgroundColor: '#1E1E2F',
//   },
//   chatWindow: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '400px', // Reduced width for smaller window
//     height: '70vh', // Reduced height for a compact look
//     backgroundColor: '#2A2A3D',
//     borderRadius: '10px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
//     padding: '20px',
//   },
//   roomTitle: {
//     marginBottom: '10px',
//     fontSize: '24px',
//     fontWeight: '600',
//     color: '#ECEFF4',
//   },
//   messageContainer: {
//     width: '100%',
//     maxHeight: '50vh',
//     overflowY: 'auto',
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#2A2A3D',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//     marginBottom: '15px',
//   },
//   messageBubble: (isSender) => ({
//     backgroundColor: isSender ? '#4C566A' : '#3B4252',
//     color: isSender ? '#A3BE8C' : '#D8DEE9',
//     padding: '10px 15px',
//     borderRadius: '18px',
//     margin: '5px 0',
//     alignSelf: isSender ? 'flex-end' : 'flex-start',
//     maxWidth: '85%',
//     wordWrap: 'break-word',
//     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
//   }),
// };




export default App;
