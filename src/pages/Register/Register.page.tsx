import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, register } from '../../services/auth.slice';
import { Input, Form, PrimaryButton, InputLabel } from "../../Styles/Forms.styles";
import { PageTitle } from "../../Styles/Titles.styles";
import { toast } from 'react-toastify';
import { IStore } from "../../Interfaces/state.interface";
import { AppDispatch } from "../../app/store";

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state:IStore) => state.auth
    )

    useEffect(() => {
        if(isError){
           toast.error(message);
        }

        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    },[user,isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e:React.FormEvent) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        if(password !== password2){
            toast.error(message);
        }else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData));
        }
    }

    if(isLoading){
        return(<h1>Loading...</h1>);
    }

    return(
        <>
            <PageTitle>Sign Up</PageTitle>
            <Form onSubmit={handleSubmit} >
                <InputLabel>Name:</InputLabel>
                <Input type="text"
                        id='name'
                        name='name'
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChange}        
                />
                <InputLabel>Email:</InputLabel>
                <Input  type="email"
                        id='email'
                        name='email'
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange} 
                />
                <InputLabel>Password:</InputLabel>
                <Input type="password"
                        id='password'
                        name='password'
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChange} 
            />
                <InputLabel>Confirm password:</InputLabel>
                <Input type="password"
                        id='password2'
                        name='password2'
                        placeholder="Confirm your password"
                        value={password2}
                        onChange={handleChange} 
                />
                <PrimaryButton type="submit" >Register</PrimaryButton>
            </Form>
        </>
        
    );
}

export default RegisterPage;