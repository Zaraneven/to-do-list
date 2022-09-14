import axios from 'axios';
import config from '../config/config';
const apiUrl = config.apiPath;


const listTasks = async () => {
    const response = await axios.get(apiUrl + "/api/todos");
    return response.data;
}
const insertTask = (text) => {
    return axios.post(apiUrl + "/api/todos", text);
    
}
const updateTask = (id, isCompleted) => {
    return axios.put(apiUrl + "/api/todos/" + id, {isCompleted
    });
}
const removeTask = (id) => {
    return axios.delete(apiUrl + "/api/todos/" + id);
}
export {listTasks, insertTask, updateTask, removeTask }