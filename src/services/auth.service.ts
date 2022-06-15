import axios from "axios";
const API_URL = "http://localhost:8000/api/";

const register = (name:string,email:string,password:string) => {
    return axios.post( API_URL + "register" , {
        name,
        email,
        password,
    });
};

const login = (email:string, password:string) => {
    return axios
        .post( API_URL + "login", {
            email,
            password
        })
        .then((response) => {
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
}

export default {
    register,
    login,
    logout,
}