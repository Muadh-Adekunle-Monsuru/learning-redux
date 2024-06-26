import { createNote, toggleImportanceOf } from './noteReducer';
import { useSelector, useDispatch } from 'react-redux';

const NewNotes = () => {
	const dispatch = useDispatch();
	const notes: any = useSelector((state) => state);

	const addNote = (event) => {
		event.preventDefault();
		const content = event.target.note.value;
		event.target.note.value = '';

		dispatch(createNote(content));
	};

	const toggleImportance = (id) => {
		dispatch(toggleImportanceOf(id));
	};

	return (
		<div>
			<form onSubmit={addNote}>
				<input name='note' />
				<button type='submit'>add</button>
			</form>
			<ul>
				{notes.map((note) => (
					<li key={note.id} onClick={() => toggleImportance(note.id)}>
						{note.content} <strong>{note.important ? 'important' : ''}</strong>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NewNotes;
