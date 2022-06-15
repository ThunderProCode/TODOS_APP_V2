import React from "react";
import { Nav, Menu } from "../Styles/NavBar.styles";
import { Link } from "react-router-dom";

export const NavBar = () => {

    return(
        <>
            <Nav>
                <h1>TODO APP</h1>
                <Menu>
                    <li>
                        <Link to="/login" >Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </Menu>
            </Nav>
        </>
    );
}