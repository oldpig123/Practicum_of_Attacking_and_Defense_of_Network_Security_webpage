// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// a web page contains  a banner, which contain three tabs: About, Message Board and Visitor Counter
// The About tab contains the introduction of the course
// The Message Board tab contains the message board for the course
// The Visitor Counter tab contains the visitor counter for the course
// The visitor counter is implemented by using the useState hook of React
// The visitor counter is initialized to 0
// When the user clicks the Visitor Counter tab, the visitor counter is increased by 1
// The visitor counter is displayed in the tab
// The visitor counter is stored in the local storage of the browser
// The visitor counter is loaded from the local storage of the browser when the page is loaded
// The visitor counter is saved to the local storage of the browser when the page is unloaded
// The message board is implemented by using the useState hook of React
// The message board is initialized to an empty array
// When the user submits a message, the message is added to the message board
// The message board is displayed in the tab
// The message board is stored in the local storage of the browser
// The message board is loaded from the local storage of the browser when the page is loaded
// The message board is saved to the local storage of the browser when the page is unloaded
// The message board is displayed in reverse chronological order
// The message board is limited to 10 messages
// The message board contains the message text, the author name, and the timestamp
// The message text is a string
// The author name is a string
// The timestamp is a string in the format "YYYY-MM-DD HH:MM:SS"
// The message text is limited to 100 characters
// The author name is limited to 20 characters
// The timestamp is generated automatically
// The message text and the author name are required
// The message text and the author name are trimmed
// The message text and the author name are escaped
// The message text and the author name are sanitized
// The message text and the author name are validated
// The message text and the author name are formatted
// The message text and the author name are localized

// Path: src/App.jsx

import { useState } from 'react'
import About from './About'
import MessageBoard from './MessageBoard'
import VisitorCounter from './VisitorCounter'
import './App.css'

function App() {
  const [tab, setTab] = useState('About')

  return (
    <>
      <div className="banner">
        <button onClick={() => setTab('About')}>About</button>
        <button onClick={() => setTab('Message Board')}>Message Board</button>
        <button onClick={() => setTab('Visitor Counter')}>Visitor Counter</button>
      </div>
      {tab === 'About' && <About />}
      {tab === 'Message Board' && <MessageBoard />}
      {tab === 'Visitor Counter' && <VisitorCounter />}
    </>
  )
}

export default App
