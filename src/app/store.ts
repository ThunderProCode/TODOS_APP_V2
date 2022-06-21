import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/auth.slice";
import todosSlice from "../services/todos.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todos: todosSlice.reducer, 
    }
})

export type AppDispatch = typeof store.dispatch;