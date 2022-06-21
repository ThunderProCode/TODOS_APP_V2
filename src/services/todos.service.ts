import axios from "axios";
import { ITodoData } from '../Interfaces/todos.interface';
axios.defaults.baseURL = 'http://localhost:8000/api';
const API_URL = '/todos/';

// Create new Todo
const createTodo =async (todoText: string, token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL,todoText, config)
    return response.data;
}

// Get user Todos
const getTodos =async (token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config);
    return response.data;
}

// UPDATE TODO
const udpateTodo = async (todoData:ITodoData,token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + todoData.id,todoData.completed,config);
    return response.data;
}

// DELETE USER TODO
const deleteTodo =async (todoId:string, token:string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + todoId, config);
    return response.data;
}

const todoService = {
    createTodo,
    getTodos,
    deleteTodo,
    udpateTodo
}

export default todoService;

