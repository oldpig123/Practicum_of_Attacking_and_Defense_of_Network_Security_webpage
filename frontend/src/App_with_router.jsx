//similar as App.jsx, but invoke BrowserRouter
// Path: src/App_with_router.jsx
// //
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import MessageBoard from './MessageBoard'
import VisitorCounter from './VisitorCounter'
import './App.css'

function App() {
    return (
        <BrowserRouter>
        <div className="banner">
            <h1>Course</h1>
            <div className="tabs">
            <NavLink to="/about" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/message-board" activeClassName="active">
                Message Board
            </NavLink>
            <NavLink to="/visitor-counter" activeClassName="active">
                Visitor Counter
            </NavLink>
            </div>
            <div className="buttons">
            <button>Sign In</button>
            <button>Register</button>
            </div>
        </div>
        <div className="content">
            <Switch>
            <Route path="/about" component={About} />
            <Route path="/message-board" component={MessageBoard} />
            <Route path="/visitor-counter" component={VisitorCounter} />
            </Switch>
        </div>
        </BrowserRouter>
    )
    }

export default App