import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { insertTask } from "../api/todo";

const AddTodo = () => {
  const [itemInput, setItemInput] = useState('');
  
  

  const handleSubmit = (e) => {
    setItemInput({
      ...itemInput,
      [e.target.name]: e.target.value,
    });
  };
  
  const createTask = () => {
    insertTask(itemInput);
  };

  return (
    <div className="ui container center aligned" style={{ marginTop: "50px" }}>
    <form>
      <div className="ui right labeled left icon input">
        <input type="text" onChange={(e) => handleSubmit(e)} name="text" />
      </div>
      <button
        onClick={createTask}
        style={{ width: "50px", height: "47px" }}
      >
        <FontAwesomeIcon icon={faPlus} type="submit" />
      </button>
    </form>
  </div>
  );
};

export default AddTodo;
