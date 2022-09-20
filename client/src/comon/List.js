import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks }) => {
  return (
    <div
      className="ui container"
      style={{ marginTop: "100px", width: "800px" }}
    >
      {tasks.map((task) => (
        <ListItem task={task} key={task._id} />
      ))}
    </div>
  );
};

export default List;
