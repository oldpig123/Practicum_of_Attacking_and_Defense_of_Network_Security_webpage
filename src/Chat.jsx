// a page that allowing users to leave messages (It is ok for messages disappearing after you refresh the page)
// Path: src/Chat.jsx
import React, { useState } from 'react'

function Chat() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    
    const handleSend = () => {
        setMessages([...messages, input])
        setInput('')
    }
    
    return (
        <div>
        <h1>Chat</h1>
        <div>
            {messages.map((message, index) => (
            <div key={index}>{message}</div>
            ))}
        </div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        </div>
    )
    }

export default Chat

// Compare this snippet from src/App.jsx:
// //         Click on the Vite and React logos to learn more
