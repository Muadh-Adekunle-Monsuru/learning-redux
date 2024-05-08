import { legacy_createStore as createStore, legacy_createStore } from 'redux';
export default function Notes() {
	const reducer = (state = [], action: { type: string; payload: any }) => {
		switch (action.type) {
			case 'ADD_NOTE':
				return state.concat(action.payload);
			case 'UPDATE_IMPORTANCE': {
				const toUpdate = state.find((val) => val.id == action.payload.id);
				const changedNote = { ...toUpdate, important: !toUpdate.important };
				return state.map((note) =>
					note.id !== action.payload.id ? note : changedNote
				);
			}
			default:
				return state;
		}
	};

	let store = legacy_createStore(reducer);

	let allNotes;
	store.subscribe(() => {
		const storeNow = store.getState();
		console.log(storeNow);
		allNotes = storeNow;
	});
	store.dispatch({
		type: 'ADD_NOTE',
		payload: {
			content: 'the app state is in redux store',
			important: true,
			id: 1,
		},
	});
	store.dispatch({
		type: 'ADD_NOTE',
		payload: {
			content: 'Learning Redux',
			important: true,
			id: 2,
		},
	});

	const handleSubmit = function (e) {
		e.preventDefault();
		const content = e.target.newnote.value;
		e.target.newnote.value = '';
		store.dispatch({
			type: 'ADD_NOTE',
			payload: {
				content,
				important: false,
				id: generateId(),
			},
		});
	};
	const generateId = () => Number((Math.random() * 1000000).toFixed(0));
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input name='newnote' placeholder='enter new note' className='p-2' />
				<button type='submit'>submit</button>
			</form>
			<ul>
				{allNotes.map((note) => (
					<li key={note.id}>
						{note.content}
						<strong>{note.important ? '🌟' : ''}</strong>
						<button
							onClick={() => {
								store.dispatch({
									type: 'UPDATE_IMPORTANCE',
									payload: {
										id: note.id,
									},
								});
							}}
						>
							update
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
