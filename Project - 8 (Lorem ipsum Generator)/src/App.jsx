import { useState } from 'react';
import Paragraphs from './Para';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [generateCount, setGenerateCount] = useState(0);
  const handleGenerate = () => {
    // const countValue = Number(count);
    if (count > 15) {
      alert("Looks like you are wanting too many paragraphs at a time 😵‍💫, slow down bro!! 🙂‍↔️");
    } else {
      setGenerateCount(count);
    }
  };

  return (
    <>
      <div className='w-full flex flex-col items-center p-10 gap-8'>
        <h1 className='text-5xl text-white'>Lorem Ipsum Generator</h1>
        <div className='flex gap-5'>
          <label htmlFor="counter" className='text-xl text-white'>Paragraphs:</label>
          <input type="number" name="" id="counter" min={0} value={count} onChange={(e) => {setCount(e.target.value)}} className='py-1 px-3'/>
          <button className='text-white px-4 py-1 bg-red-500 rounded-md active:scale-75 duration-75' onClick={handleGenerate}>Generate</button>
        </div>
        <Paragraphs length = {generateCount}/>
      </div>  
    </>
  )
}

export default App;
