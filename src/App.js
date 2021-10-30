import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div> {input}</div>
      <ChildComponent />
    </div>
  );
}

const ChildComponent = () => {
  console.log('rerender')
  return <div> Child </div>;
}