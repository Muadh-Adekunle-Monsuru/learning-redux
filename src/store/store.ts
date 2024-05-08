import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import TodoReducer from './TodoSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todo: TodoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
