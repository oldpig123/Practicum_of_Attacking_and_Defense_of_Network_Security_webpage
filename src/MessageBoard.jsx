//Contain a message board the allow visitors to leave messages
// Path: src/MessageBoard.jsx
//
import React, { useState } from 'react'
import './MessageBoard.css'

function MessageBoard() {
    const [messages, setMessages] = useState([])
    const [messageText, setMessageText] = useState('')
    const [authorName, setAuthorName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (messageText.trim() === '' || authorName.trim() === '') {
            return
        }

        const newMessage = {
            text: messageText.trim().substring(0, 100), // limit to 100 characters
            author: authorName.trim().substring(0, 20), // limit to 20 characters
            timestamp: new Date().toISOString().substring(0, 19).replace('T', ' '), // format: "YYYY-MM-DD HH:MM:SS"
        }

        setMessages([newMessage, ...messages].slice(0, 10)) // limit to 10 messages
        setMessageText('')
        setAuthorName('')
    }

    return (
        <div className="message-board">
            <h1>Message Board</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={messageText}
                    onChange={(event) => setMessageText(event.target.value)}
                    placeholder="Message"
                    required
                />
                <input
                    type="text"
                    value={authorName}
                    onChange={(event) => setAuthorName(event.target.value)}
                    placeholder="Author"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <span>{message.text}</span>
                        <span>{message.author} - {message.timestamp}</span>
                        
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MessageBoard
