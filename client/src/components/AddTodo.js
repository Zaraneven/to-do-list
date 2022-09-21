import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { insertTask } from "../api/todo";

const AddTodo = () => {
  const [itemInput, setItemInput] = useState('');
  
  

  const handleChange = (e) => {
    const value = e.target.value;
    setItemInput(value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(itemInput) {
      insertTask( { text: itemInput })
    }
    setItemInput('')
  };

  return (
    <div className="ui container center aligned" style={{ marginTop: "50px" }}>
    <form>
      <div className="ui right labeled left icon input">
        <input type="text" onChange={(e) => handleChange(e)} name="text" value={itemInput} />
      </div>
      <button
        onClick={handleSubmit}
        style={{ width: "50px", height: "47px" }}
      >
        <FontAwesomeIcon icon={faPlus} type="submit" />
      </button>
    </form>
  </div>
  );
};

export default AddTodo;
