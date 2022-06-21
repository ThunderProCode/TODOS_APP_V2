import styled from "styled-components";

export const TodosContainer = styled.div`
    width: 90%;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;   
`

export const TodosHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
`

export const TodoInput = styled.input`
    height: 100%;
    width: 90%;
    padding: 8px;
    
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: none;
    
    border: 1px solid black;
    border-right: 0px;

    color: black;
    outline: none;
`

export const TodoIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    
    background: gray;

    width: 10%;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid black;
`
export const TodosList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TodoItemContainer = styled.li`
    width: 100%;
    padding: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid black;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;

    svg{
        font-size: 18px;
    }

`