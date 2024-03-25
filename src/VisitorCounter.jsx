//contains a counter of visitors
// Path: src/VisitorCounter.jsx
//
import React, { useState, useEffect } from 'react'
import './VisitorCounter.css'

function VisitorCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const storedCount = localStorage.getItem('count')
        if (storedCount) {
            setCount(parseInt(storedCount)+1)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return (
        <div className="visitor-counter">
            <h1>Visitor Counter</h1>
            <p>{count} {count === 1 ? 'visitor' : 'visitors'}</p>
            
        </div>
    )
}

export default VisitorCounter
