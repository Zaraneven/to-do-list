import React, { useState } from "react";
import { removeTask, updateTask } from "../api/todo";

const ListItem = ({ text, id, tasks }) => {
  const [task, setTask] = useState(text);
  const [isCompleted, setIsCompleted] = useState(false);
  const deleteTask = () => {
    removeTask(`${id}`);
  };
  function refreshPage() {
    window.location.reload();
  }

  const update = () => {
    setIsCompleted(!isCompleted);
    updateTask(id, !isCompleted);
    setTask(<span className="tt">{task}</span>);
  };

  return (
    <ul>
      <li className="list-group-item" id="list">
        <p id="ff">
          {task}
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
            onClick={() => {deleteTask(); refreshPage()}}
          >
            <i className="icon red trash" />
          </button>
        </p>
      </li>
    </ul>
  );
};

export default ListItem;
