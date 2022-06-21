export interface IUser {
    id:string;
    name: string;
    email: string;
    password: string;
    token: string;
}

export interface IUserData {
    name: string;
    email: string;
    password: string;
}

export interface ILoginUserData {
    email: string;
    password: string;
}