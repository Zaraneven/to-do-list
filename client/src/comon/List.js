import React from "react";

const List = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
