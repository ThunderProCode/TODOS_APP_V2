import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from "../../services/auth.slice";
import { IStore } from "../../Interfaces/state.interface";
import { PageTitle } from "../../Styles/Titles.styles";
import { TodoIconContainer, TodoInput, TodosContainer, TodosHeader, TodosList } from "../../Styles/Todos.styles";
import { MdAdd } from 'react-icons/md';
import { TodoItem } from "../../Components/Todos/TodoIterm";
import { getTodos } from "../../services/todos.slice";
import { ITodo } from '../../Interfaces/todos.interface';

const Dashboard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state:IStore) => state.auth);
    const { todos, isLoading, isError, message }  = useSelector((state) => state.todos)

    useEffect(() => {
        if(isError){
            console.log(message)
        }

        if(!user){
            navigate('/login')
        }

        dispatch(getTodos());

        return () => {
            dispatch(reset())
        }
    },[user, navigate, isError, message, dispatch])


    if(isLoading){
        return (<h1>Loading...</h1>);
    }

    return(
        <>
            <PageTitle>Dashboard</PageTitle>
            <TodosContainer>
                <TodosHeader>
                    <TodoInput type="text"
                                placeholder="Enter todo"
                    />
                    <TodoIconContainer>
                        <MdAdd/>
                    </TodoIconContainer>
                </TodosHeader>
                <TodosList>
                    {
                        todos.map( (todo:ITodo) =>
                            <TodoItem   user={todo.user}
                                        text={todo.text}
                                        completed={todo.completed}
                                        id={todo.id}
                                        key={todo.id} 
                            /> 
                        )
                    }
                </TodosList>
            </TodosContainer>
        </>
    );
}

export default Dashboard;