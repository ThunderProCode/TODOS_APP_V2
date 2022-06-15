import React from "react";
import { Input, Form, PrimaryButton, InputLabel } from "../../Styles/Forms.styles";
import { PageTitle } from "../../Styles/Titles.styles";

const RegisterPage = () => {

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

    return(
        <>
            <PageTitle>Sign Up</PageTitle>
            <Form onSubmit={handleSubmit} >
                <InputLabel>Name:</InputLabel>
                <Input type="text" />
                <InputLabel>Email:</InputLabel>
                <Input  type="email"/>
                <InputLabel>Password:</InputLabel>
                <Input type="password"/>
                <InputLabel>Confirm password:</InputLabel>
                <Input type="password"/>
                <PrimaryButton type="submit" >Register</PrimaryButton>
            </Form>
        </>
        
    );
}

export default RegisterPage;