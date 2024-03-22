import React, { useState } from 'react';

function MessageBoard() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (event) => {
    event.preventDefault();
    const newMessage = event.target.message.value;
    setMessages([...messages, newMessage]);
    event.target.message.value = ''; // Clear the input field
  }

  return (
    <section id="message-board">
      <h2>Message Board</h2>
      <form id="message-form" onSubmit={handleNewMessage}>
        <label for="message">Leave a message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <ul id="messages">
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </section>
  );
}

export default MessageBoard;
