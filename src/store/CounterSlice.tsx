import { createSlice } from '@reduxjs/toolkit';
interface Counter {
	value: number;
	amount: number;
}

const initialState: Counter = {
	value: 0,
	amount: 1,
};
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.value += action.payload;
		},
		decrement: (state, action) => {
			state.value -= action.payload;
		},
		changeAmount: (state, action) => {
			state.amount = action.payload;
		},
	},
});

export const { increment, decrement, changeAmount } = counterSlice.actions;
export default counterSlice.reducer;
