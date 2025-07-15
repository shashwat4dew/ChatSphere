// import React, { useState } from 'react';

// function MessageInput({ onSend }) {
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     onSend(message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message"
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// }

// export default MessageInput;

import React, { useState } from 'react';

function MessageInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={styles.input}
        aria-label="Message input"
        tabIndex="0"
      />
      <button 
        type="submit" 
        style={styles.button} 
        tabIndex="0"
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Send
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    width: '100%',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default MessageInput;
