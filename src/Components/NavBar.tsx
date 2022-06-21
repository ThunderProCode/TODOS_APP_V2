import React from "react";
import { Nav, Menu } from "../Styles/NavBar.styles";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from "../services/auth.slice";
import { IStore } from "../Interfaces/state.interface";
import { AppDispatch } from "../app/store";

export const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state:IStore) => state.auth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return(
        <>
            <Nav>
                <h1>TODO APP</h1>
                <Menu>
                    {
                        user ? (
                            <>
                                <li>
                                    <button onClick={onLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ):
                        (
                        <>
                            <li>
                                <Link to="/login" >Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )
                    }
                   
                </Menu>
            </Nav>
        </>
    );
}