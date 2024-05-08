import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createStore } from 'redux';

export default function Counter() {
	const newReducer = (state = 0, action: { type: any }) => {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			case 'ZERO':
				return 0;
			default:
				return state;
		}
	};
	const store = createStore(newReducer);
	store.subscribe(() => {
		const storeNow = store.getState();
		console.log(storeNow);
	});
	return (
		<div>
			<>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src={viteLogo} className='logo' alt='Vite logo' />
					</a>
					<a href='https://react.dev' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
						Increment
					</button>
					<button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
						Decrement
					</button>
					<p>{store.getState()}</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</>
		</div>
	);
}
