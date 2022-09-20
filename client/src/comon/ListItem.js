import React, { useState } from "react";
import { removeTask, updateTask } from "../api/todo";

const ListItem = ({ task }) => {
  const [style, setStyle] = useState('')
  const [isCompleted, setIsCompleted] = useState(false);
  const deleteTask = () => {
    removeTask(task._id);
  };
  

  const update = () => {
    setIsCompleted(!isCompleted);
    updateTask(task._id, !isCompleted);
    setStyle('tt')
    if (isCompleted) {
      setStyle('')
    }

  };

  return (
    <ul>
      <li className="list-group-item" id="list">
        <p id="ff" className={style}>
          {task.text}
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
        </p>
      </li>
    </ul>
  );
};

export default ListItem;
