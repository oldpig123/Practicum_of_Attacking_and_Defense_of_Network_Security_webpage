import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about';
import MessageBoard from './message';
import Counter from './counter';
import Banner from './Banner'; // Import Banner component

function App() {
  return (
    <Router>
      <Banner /> {/* Render the Banner component */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/chat" element={<MessageBoard />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
