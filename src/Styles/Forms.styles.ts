import styled from "styled-components";

export const Form = styled.form`
    width: 95%;
    margin: 12px 0px 12px 0px;
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    padding: 8px;
    width: 100%;
    height: 40px;
    border: solid 1px black;
    border-radius: 4px;
    outline: none;
    background: none;

`

export const PrimaryButton = styled.button`
    margin-top: 16px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background: black;
    color: white;

    &:hover {
        opacity: 85%;
    }

`

export const InputLabel = styled.label`
    font-weight: 600;
    margin: 8px 0px 8px 0px;
`
