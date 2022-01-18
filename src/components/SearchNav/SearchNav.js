import React from 'react';
import { useState } from 'react';

function SearchNav(props) {
	const search = [
		{
			id: 2801268,
			name: 'London, City of London, Greater London, United Kingdom',
			region: 'City of London, Greater London',
			country: 'United Kingdom',
			lat: 51.52,
			lon: -0.11,
			url: 'london-city-of-london-greater-london-united-kingdom',
		},
		{
			id: 2796590,
			name: 'Holborn, Camden, Greater London, United Kingdom',
			region: 'Camden, Greater London',
			country: 'United Kingdom',
			lat: 51.52,
			lon: -0.12,
			url: 'holborn-camden-greater-london-united-kingdom',
		},
		{
			id: 2812957,
			name: 'St Giles, Camden, Greater London, United Kingdom',
			region: 'Camden, Greater London',
			country: 'United Kingdom',
			lat: 51.52,
			lon: -0.12,
			url: 'st-giles-camden-greater-london-united-kingdom',
		},
		{
			id: 2786308,
			name: 'Clerkenwell, Islington, Greater London, United Kingdom',
			region: 'Islington, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.11,
			url: 'clerkenwell-islington-greater-london-united-kingdom',
		},
		{
			id: 2791655,
			name: 'Finsbury, Islington, Greater London, United Kingdom',
			region: 'Islington, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.11,
			url: 'finsbury-islington-greater-london-united-kingdom',
		},
		{
			id: 2813087,
			name: 'St Pancras, Camden, Greater London, United Kingdom',
			region: 'Camden, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.12,
			url: 'st-pancras-camden-greater-london-united-kingdom',
		},
		{
			id: 2781746,
			name: 'Bloomsbury, Camden, Greater London, United Kingdom',
			region: 'Camden, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.12,
			url: 'bloomsbury-camden-greater-london-united-kingdom',
		},
		{
			id: 2813948,
			name: 'Strand, Westminster, Greater London, United Kingdom',
			region: 'Westminster, Greater London',
			country: 'United Kingdom',
			lat: 51.51,
			lon: -0.12,
			url: 'strand-westminster-greater-london-united-kingdom',
		},
		{
			id: 2811665,
			name: 'Shoreditch, Hackney, Greater London, United Kingdom',
			region: 'Hackney, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.09,
			url: 'shoreditch-hackney-greater-london-united-kingdom',
		},
		{
			id: 2813028,
			name: "St Luke's, Islington, Greater London, United Kingdom",
			region: 'Islington, Greater London',
			country: 'United Kingdom',
			lat: 51.53,
			lon: -0.09,
			url: 'st-lukes-islington-greater-london-united-kingdom',
		},
	];
	const [formState, setFormState] = useState(search);

	const handleSubmit = (event) => {
		console.log('You picked a country!');
		event.preventDefault();
		setFormState(search);
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='country'>Select Country</label>
			<select id='country' value={formState.country} onChange={handleChange}>
				<option value={formState.name}>{search[0].name}</option>
				<option value={formState.name}>{search[1].name}</option>
				<option value={formState.name}>{search[2].name}</option>
				<option value={formState.name}>{search[3].name}</option>
				<option value={formState.name}>{search[4].name}</option>
				<option value={formState.name}>{search[5].name}</option>
				<option value={formState.name}>{search[6].name}</option>
				<option value={formState.name}>{search[7].name}</option>
				<option value={formState.name}>{search[8].name}</option>
				<option value={formState.name}>{search[9].name}</option>
			</select>
		</form>
	);
}

export default SearchNav;
