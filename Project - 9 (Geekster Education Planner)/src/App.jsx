import { useState } from 'react'
import Task from './Task';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [subject, setSubject] = useState("");
  const [task, setTask] = useState([]);
  const addObj = () => {
    const newTask = {
      id: task.length + 1,
      subject: subject,
      hours: count
    }
    setTask([...task, newTask]);
  }

  // console.log(task);

  return (
    <>
      <div className='w-full h-[100vh] bg-indigo-300 flex flex-col py-5 items-center gap-7'>
        <h1 className='text-6xl text-indigo-800 font-bold'>Task Scheduler ✍️</h1>
        <div className='flex gap-5 justify-center bg-indigo-950 p-5 rounded-lg text-indigo-200 text-xl'>
          <input type="text" placeholder='Subject' value={subject} onChange={(e) => {setSubject(e.target.value)}} className='px-3 py-1 rounded-md text-indigo-950'/>
          <input type="number" min={0} max={24} placeholder='Hours' value={count} onChange={(e) => {setCount(e.target.value)}} className='w-1/5 px-3 py-1 rounded-md text-indigo-950'/>
          {/* {console.log(subject, count)} */}
          <button className='bg-red-500 py-1 px-3 rounded-lg text-indigo-950' onClick={addObj}>Add</button>
        </div>
        <div className="w-full flex flex-col gap-6 items-center rounded-xl">
            <Task taskArray = {task}/>  
        </div>
      </div>       
    </>
  )
}

export default App
