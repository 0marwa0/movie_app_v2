import React from "react";

function Todo(props) {
  let tasks = props.data;

  return (
    <div className="container">
      <ul class="list-group">
        {tasks.map(function (item, index) {
          return <li class="list-group-item">
            {item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
