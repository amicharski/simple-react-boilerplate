import { useState } from 'react';
import React from 'react';
import me from './styles.module.scss';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className={me.mario}>{count}ddd</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
