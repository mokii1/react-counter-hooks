
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

  const [history, setHistory] = useState([0]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Лічильник з історією змін</h2>
      <h3>Поточне значення: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>-</button>

      <h4>Історія змін:</h4>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

