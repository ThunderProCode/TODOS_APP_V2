import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from "../../services/auth.slice";
import { IStore } from "../../Interfaces/state.interface";
import { PageTitle } from "../../Styles/Titles.styles";
import { TodoIconContainer, TodoInput, TodosContainer, TodosHeader, TodosList } from "../../Styles/Todos.styles";
import { MdAdd } from 'react-icons/md';
import { TodoItem } from "../../Components/Todos/TodoIterm";
import { getTodos,createTodo } from "../../services/todos.slice";
import { ITodo } from '../../Interfaces/todos.interface';
import { ITodoForm } from '../../Interfaces/forms.interfaces';

const initialState:ITodoForm = {
    text: '',
}

const Dashboard = () => {

    const [formData, setFormData] = useState<ITodoForm>(initialState);
    const { text } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user,isLoading } = useSelector((state:IStore) => state.auth);
    const { todos,isError, message }  = useSelector((state) => state.todos)


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

    const handleSubmit = () => {
        dispatch(createTodo(formData));
    }

    const handleChange = (e:React.FormEvent) => {
        setFormData((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }));
    }

    return(
        <>
            <PageTitle>Dashboard</PageTitle>
            <TodosContainer>
                <TodosHeader>
                    <TodoInput type="text"
                                placeholder="Enter todo"
                                id="text"
                                name="text"
                                value={text}
                                onChange={handleChange}
                    />
                    <TodoIconContainer onClick={handleSubmit}>
                        <MdAdd/>
                    </TodoIconContainer>
                </TodosHeader>
                <TodosList>
                    {
                        todos.map( (todo:ITodo) =>
                            <TodoItem   user={todo.user}
                                        text={todo.text}
                                        completed={todo.completed}
                                        id={todo._id}
                                        key={todo.text} 
                            /> 
                        )
                    }
                </TodosList>
            </TodosContainer>
        </>
    );
}

export default Dashboard;