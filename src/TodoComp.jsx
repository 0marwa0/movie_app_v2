import React, { useState } from "react";

function TodoComp() {
  // this state for the new added task
  const [task, setTask] = useState("");

  // this state for all tasks that we have.
  const [tasks, setTasks] = useState([]);

  // this function going to save the new entered value of the user
  function handleTask(e) {
    setTask(e.target.value);
  }
  // this function going to update: tasks state that I have
  function add() {
    // creating an array and give it value from the tasks state
    // tasks state has all tasks that we have currently
    let data = [...tasks];
    // push task that got form the input to the new array

    data.push(task);

    // update tasks state and give it the new array
    setTasks(data);
  }
  return (
    <div className="container">
      <input type="text" value={task} onChange={handleTask} />
      <button onClick={add} className="btn btn-pramiary">
        Add task
      </button>
      {/* looping through the tasks state to show the data */}
      <ul className="list-group">
        {tasks.map(function (item, i) {
          return <li className="list-group-itemm"> {item} </li>;
        })}
      </ul>
    </div>
  );
}

export default TodoComp;
