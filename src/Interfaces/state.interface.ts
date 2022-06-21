import { IUser } from './user.interface';

export interface IState {
    user: IUser;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

export interface IStore {
    auth:IState;
}