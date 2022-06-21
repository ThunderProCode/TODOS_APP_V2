import React from "react";
import { TodoItemContainer } from "../../Styles/Todos.styles";
import { AiFillCheckSquare,AiOutlineBorder,AiOutlineDelete } from 'react-icons/ai';
import { ITodo } from '../../Interfaces/todos.interface';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { updateTodo } from "../../services/todos.slice";

export const TodoItem = ({user,text,completed,id}:ITodo) => {

    const dispatch = useDispatch<AppDispatch>();

    const toggleTodo = () => {
        dispatch(updateTodo(id));
    }

    return(
        <>
            <TodoItemContainer>
                {
                    completed ? <AiFillCheckSquare onClick={toggleTodo} /> :
                    <AiOutlineBorder onClick={toggleTodo}/>
                }
                    <p>{text}</p>
                <AiOutlineDelete/>
            </TodoItemContainer>
        </>
    );
}