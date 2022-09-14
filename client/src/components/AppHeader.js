import React from "react";
import todo from "../assets/todo.png";

const AppHeader = () => {
  return (
    <div className="ui clearing segment" style={{ backgroundColor: 'blue'}}>
      
      <h2 style={{ textAlign: 'left'}}>
        <img src={todo} alt="logo" style={{ height: '90px', width: '90px'}} />
        <p  style={{fontSize: '38px', color: 'white', textAlign: 'right'}} >
        Project: Todo List
      </p>
      </h2>
    </div>
  );
};

export default AppHeader;
