import { createSlice } from '@reduxjs/toolkit';

interface Todos {
	item: string[];
}

const initialState: Todos = {
	item: [],
};

const TodoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.item.push(action.payload);
		},
	},
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
