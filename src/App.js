import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './redux/actions/gamesActions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames());
	});

	return <div className="app">Hello Ignite?</div>;
}

export default App;
