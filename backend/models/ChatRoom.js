const sendMessage = (messageContent) => {
    const messageData = {
      room,
      content: messageContent,
      sender: socket.id, // You can replace this with the actual user's name or identifier
    };
    socket.emit('sendMessage', messageData);
    setMessages(prevMessages => [...prevMessages, messageData]);
  };
  