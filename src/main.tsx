import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createstore, legacy_createStore } from 'redux';
import noteReducer from './reducers/noteReducer.tsx';

const store = legacy_createStore(noteReducer);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
