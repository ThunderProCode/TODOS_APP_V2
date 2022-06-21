import React from "react";
import { GlobalStyles } from "./Styles/Global.styles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login.page";
import RegisterPage from "./pages/Register/Register.page";
import Dashboard from "./pages/Dashboard/Dashboard.page";

import { Wrapper } from "./Styles/Wrappers.styles";

const App = () => (
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <Wrapper>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<RegisterPage/>} />
                    </Routes>
            </Wrapper>
        </BrowserRouter>
        <ToastContainer/>
    </>
)

export default App;