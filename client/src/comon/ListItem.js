import React, { useState } from "react";
import { removeTask, updateTask } from "../api/todo";

const ListItem = ({ task }) => {
  const [style, setStyle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  
  const deleteTask = () => {
    removeTask(task._id);
  };

  const update = () => {
    setIsCompleted(!isCompleted);
    updateTask(task._id, !isCompleted);
    setStyle("tt");
    if (isCompleted) {
      setStyle("");
    }
  };

  return (
    <div>
      <ul>
        <li className="list-group-item" id="list" onClick={update}>
          {task.isCompleted ? <span className="tt">{task.text}</span> : task.text}
          <input
            type="checkbox"
            style={{ float: "right" }}
            onChange={update}
            name="isCompleted"
          />
          <button
            style={{
              float: "right",
              backgroundColor: "white",
              borderStyle: "none",
            }}
            onClick={deleteTask}
          >
            <i className="icon red trash" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
