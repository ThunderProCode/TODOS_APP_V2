import { IUser } from "../Interfaces/user.interface";

export const authHeader = () => {
    let user:IUser;
    if(localStorage.getItem('user')){
        user = JSON.parse(localStorage.getItem('user'));
    }
    
    if(user && user.token){
        return {
            Authorization: 'Bearer ' + user.token
        };
    }else {
        return {};
    }
}