import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITodoData, ITodo, ITodosInitialState } from '../Interfaces/todos.interface';
import todoService from './todos.service';
import { ITodoForm } from '../Interfaces/forms.interfaces';
import { IState, IStore } from '../Interfaces/state.interface';

const initialState:ITodosInitialState = {
    todos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new Todo
export const createTodo = createAsyncThunk(
    'todos/create',
   async (todoText:ITodoForm, thunkAPI) => {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const token:string = thunkAPI.getState().auth.user.token;
        return await todoService.createTodo(todoText,token);
    } catch (error:any) {
        const message = 
            (error.response &&
                error.response.data && 
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message);
    }
   }
)

// Get User Todos
export const getTodos = createAsyncThunk(
    'todos/getAll',
   async (_,thunkAPI) => {
     try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const token = thunkAPI.getState().auth.user.token;
        return await todoService.getTodos(token);
     } catch (error:any) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
     }
   }
)

// Update User Todo
export const updateTodo = createAsyncThunk(
    'todos/udpate',
   async (todoData:ITodoData, thunkAPI) => {
        try {
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const token = thunkAPI.getState().auth.user.token;
            return await todoService.udpateTodo(todoData, token);
        } catch (error:any) {
        const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
            return thunkAPI.rejectWithValue(message);
        }
   }
)

// Delete USER TODO
export const deleteTodo = createAsyncThunk(
    'todos/delete',
   async (id:string,thunkAPI) => {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const state:IStore = thunkAPI.getState();
        const token = state.auth.user.token;
        return await todoService.deleteTodo(id,token);
    } catch (error:any) {
        const message = 
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
    }
   }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase( createTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                state.todos.push(action.payload)
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTodos.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTodos.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = action.payload
            })
            .addCase(getTodos.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                state.message = action.payload
            })
            .addCase(deleteTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTodo.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                const todos:ITodo[] = state.todos;
                const todoIndex = todos.findIndex(todo => {
                    return todo.id == action.payload.id;
                });
                todos.splice(todoIndex,1);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                state.message = action.payload
            })
            .addCase(updateTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateTodo.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = action.payload
            })
            .addCase(updateTodo.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                state.message = action.payload
            })
    }
})

export const {reset} = todoSlice.actions;
export default todoSlice;