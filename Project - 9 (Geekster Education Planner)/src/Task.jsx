import { useState } from "react";

const updateLocalStorage = (updatedTasks) => {
  // Update the localStorage with the new task array
  localStorage.setItem('taskData', JSON.stringify(updatedTasks));
  props.setTask(updatedTasks); // Update the parent state too
};

const Task = (props) => {
//   console.log(props);
  const [count, setCount] = useState(0);

  const addValue = (id) => {
    const updatedTasks = props.taskArray.map((Obj) => {
      if (Obj.id === id) {
        Obj.hours = Number(Obj.hours) + 1;
      }
      return Obj;
    });
    setCount(count + 1);
    updateLocalStorage(updatedTasks); // Save changes to localStorage
  };

  const substractValue = (id) => {
    const updatedTasks = props.taskArray.map((Obj) => {
      if (Obj.id === id && Obj.hours > 0) {
        Obj.hours -= 1;
      }
      return Obj;
    });
    setCount(count - 1);
    updateLocalStorage(updatedTasks); // Save changes to localStorage
  };
  return (
    <>
      {props.taskArray.map((Obj) => {
        return (
          <div className="w-2/5 flex justify-center gap-8 bg-green-200 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold text-indigo-800">
              <span className="">{Obj.subject}</span> for{" "}
              <span className="text-red-800">{Obj.hours} Hours</span>
            </h1>
            <button
              className="text-2xl bg-green-600 px-5 rounded-lg"
              onClick={() => addValue(Obj.id)}
            >
              +
            </button>
            <button
              className="text-2xl bg-red-600 px-5 rounded-lg"
              onClick={() => substractValue(Obj.id)}
            >
              -
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Task;
