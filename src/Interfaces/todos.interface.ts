export interface ITodoData {
    id:string,
    isCompleted: boolean
}

export interface ITodo {
    user: string;
    text: string;
    completed: boolean;
    id: string;
}

export interface ITodosInitialState {
    todos:ITodo[];
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}