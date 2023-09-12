import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks-slice";
import { authReducer } from "./slices/auth_slice";

export const reduxStore = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});
