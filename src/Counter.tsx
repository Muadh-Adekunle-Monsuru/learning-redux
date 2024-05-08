import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, changeAmount } from './store/CounterSlice';
import { RootState } from './store/store';
export default function Counter() {
	const state = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	const amount = useSelector((state: RootState) => state.counter.amount);
	return (
		<div>
			<h1>{state}</h1>
			<input
				name='amount'
				type='number'
				onChange={(e) => dispatch(changeAmount(Number(e.target.value)))}
			/>
			<p>Amount {amount}</p>
			<button onClick={() => dispatch(increment(amount))}>increment</button>
			<button onClick={() => dispatch(decrement(amount))}>decrement</button>
		</div>
	);
}
