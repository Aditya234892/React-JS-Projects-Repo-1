import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCount] = useState(0);

  const addValue = () => {
    setCount(counter + 1);
  }

  const removeValue = () => {
    if(counter < 1){
      setCount(0);
    }else{
      setCount(counter - 1);
    }
  }
  
  return (
    <div className="container">
      <h1>Counter App using React 🔥</h1>
      <h3>Counter Value: {counter}</h3>
      <div className='btns'>
        <button onClick={addValue}>Increase value by one</button>
        <button onClick={removeValue}>Decrease value by one</button>
      </div>
    </div>
  );
}

export default App;
