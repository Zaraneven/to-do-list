import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks }) => {
  return (
    <div
      className="ui container"
      style={{ marginTop: "100px", width: "800px" }}
    >
      {tasks.map((c) => (
        <ListItem tasks={tasks} text={c.text} id={c._id}  />
      ))}
    </div>
  );
};

export default List;
