import React from "react";
import { TodoItemContainer } from "../../Styles/Todos.styles";
import { AiFillCheckSquare,AiOutlineBorder,AiOutlineDelete } from 'react-icons/ai';
import { ITodo } from '../../Interfaces/todos.interface';


export const TodoItem = ({user,text,completed,id}:ITodo) => {

    return(
        <>
            <TodoItemContainer>
                <AiOutlineBorder/>
                    <p>{text}</p>
                <AiOutlineDelete/>
            </TodoItemContainer>
        </>
    );
}