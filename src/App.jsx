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

// a webpage with a banner that contain "About" , Chat, and visitor counter. "About" will lead to a page that contain the information of the project. Chat will lead to a page that contain a chatroom. Visitor counter will show the number of visitor that visit the page.
// Path: src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './About'
import Chat from './Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/counter">Visitor counter</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/counter">
            <div>
              <h1>Visitor counter</h1>
              <p>Visitor count: {count}</p>
              <button onClick={() => setCount((count) => count + 1)}>
                Increment
              </button>
            </div>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

