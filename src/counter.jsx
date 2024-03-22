import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // Update count on component mount (initial visit)
  }, []);

  return (
    <section id="visitor-counter">
      <h2>Visitors</h2>
      <span id="count">{count}</span>
    </section>
  );
}

export default Counter;
