import React, { useEffect, useState} from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import AppHeader from "./AppHeader";
import { listTask } from "./api/todo";
import List from "../comon/List";



const Todo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        listTask('tasks', data => setTasks(data))

        
    }, []);

    
    return (
        <div className="ui container">
            <AppHeader />
            <AddTodo />
            <List tasks={tasks}/>
            <Footer />
        </div>
    )
}

export default Todo;