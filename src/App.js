// Dependencies
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Componenets
import Hourly from './components/Hourly/Hourly';
import Today from './components/Today/Today';
import SearchNav from './components/SearchNav/SearchNav';
import Navigation from './components/Navigation/Navigation';

// Stylesheets
import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<SearchNav />
			</header>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Routes>
					<Route path='today' element={<Today />} />
					<Route path='hourly' element={<Hourly />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
