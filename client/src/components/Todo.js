import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import AppHeader from "./AppHeader";
import { listTasks } from "../api/todo";
import List from "../comon/List";


const Todo = () => {
  const [tasks, setTasks] = useState([]);
  

  useEffect(() => {
    listTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div className="ui header">
      <AppHeader />
      <AddTodo />
      <List tasks={tasks} />
      <Footer />
    </div>
  );
};

export default Todo;
