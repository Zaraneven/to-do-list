import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTodo = () => {
  return (
    <div class="ui container center aligned">
      <div class="ui right labeled left icon input">
        <input type="text" style={{ width: '500px'}} placeholder="Search..." />
      </div>
      <button style={{ width: '50px', height:'38px'}}>
        <FontAwesomeIcon icon={faPlus} />
      </button>  
    </div>
  );
};

export default AddTodo;
