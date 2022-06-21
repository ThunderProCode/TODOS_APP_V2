import React, { useEffect, useState } from "react";
import { Form, InputLabel, Input, PrimaryButton } from '../../Styles/Forms.styles';
import { PageTitle } from "../../Styles/Titles.styles";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { reset, login } from "../../services/auth.slice";
import { LoginForm } from "../../Interfaces/forms.interfaces";
import { IStore } from "../../Interfaces/state.interface";
import { AppDispatch } from "../../app/store";

const formInitialState:LoginForm = {
    email: '',
    password: '',
}

const Login = () => {

    const [formData, setFormData] = useState<LoginForm>(formInitialState);
    const {email, password} = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state:IStore) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
                navigate('/')
        }

        dispatch(reset());

    },[user,isError, isSuccess, message, navigate, dispatch])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        dispatch(login(userData));
    }

    const handleChange = (e:React.FormEvent) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <PageTitle>Sign In</PageTitle>
            <Form  onSubmit={handleSubmit}>
                <InputLabel>Email: </InputLabel>
                <Input type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                />
                <InputLabel>Password: </InputLabel>
                <Input type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChange}
                />
                <PrimaryButton type="submit">Login</PrimaryButton>
            </Form>
        </>
    );
}

export default Login;