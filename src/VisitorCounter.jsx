//contains a counter of visitors
// Path: src/VisitorCounter.jsx
//
import React, { useState, useEffect } from 'react'
//import './VisitorCounter.css'

function VisitorCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const storedCount = localStorage.getItem('count')
        if (storedCount) {
            setCount(parseInt(storedCount))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return (
        <div className="visitor-counter">
            <h1>Visitor Counter</h1>
            <p>{count} {count === 1 ? 'visitor' : 'visitors'}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default VisitorCounter
