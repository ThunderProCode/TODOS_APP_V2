import React from "react";
import RegisterPage from "./pages/Register/Register.page";
import { GlobalStyles } from "./Styles/Global.styles";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.page";
import { Wrapper } from "./Styles/Wrappers.styles";

const App = () => (
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <Wrapper>
                <NavBar/>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<RegisterPage/>} />
                    </Routes>
            </Wrapper>
        </BrowserRouter>
    </>
)

export default App;