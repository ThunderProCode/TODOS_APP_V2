import { IUser } from './user.interface';
import { ITodosInitialState } from './todos.interface';

export interface IState {
    user: IUser;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}


export interface IStore {
    auth:IState;
    todos:ITodosInitialState;
}