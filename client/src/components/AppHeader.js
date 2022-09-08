import React from "react";
import todo from "../assets/todo.png";

const AppHeader = () => {
  return (
    <div class="ui clearing segment" style={{ backgroundColor: 'blue'}}>
      <h2 class="ui right floated header" style={{fontSize: '30px', color: 'white'}}>
        Project: Todo List
      </h2>
      <h2 class="ui left floated header">
        <img src={todo} alt="logo" style={{ height: '90px', width: '90px'}} />
      </h2>
    </div>
  );
};

export default AppHeader;
