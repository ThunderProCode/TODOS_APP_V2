import React, { useState } from "react";
import { TodoItemContainer } from "../../Styles/Todos.styles";
import { AiFillCheckSquare,AiOutlineBorder,AiOutlineDelete } from 'react-icons/ai';
import { ITodo, ITodoData } from '../../Interfaces/todos.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { deleteTodo, updateTodo } from "../../services/todos.slice";

export const TodoItem = ({text,completed,id}:ITodo) => {

    const [ isCompleted, setIsCompleted ] = useState(completed);
    const dispatch = useDispatch<AppDispatch>();

    const toggleTodo = () => {

        setIsCompleted( (prevstate) => !prevstate );
        const todoData:ITodoData = {
            id,
            isCompleted
        }
        dispatch(updateTodo(todoData));
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    }

    return(
        <>
            <TodoItemContainer>
                {
                    isCompleted ? <AiFillCheckSquare onClick={toggleTodo} /> :
                    <AiOutlineBorder onClick={toggleTodo}/>
                }
                    <p>{text}</p>
                <AiOutlineDelete onClick={handleDelete}/>
            </TodoItemContainer>
        </>
    );
}