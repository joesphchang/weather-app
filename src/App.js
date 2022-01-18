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
  const london = 
    {
  "location": {
    "name": "London",
    "region": "City of London, Greater London",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11,
    "tz_id": "Europe/London",
    "localtime_epoch": 1613896955,
    "localtime": "2021-02-21 8:42"
  },
  "current": {
    "last_updated_epoch": 1613896210,
    "last_updated": "2021-02-21 08:30",
    "temp_c": 11,
    "temp_f": 51.8,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 3.8,
    "wind_kph": 6.1,
    "wind_degree": 220,
    "wind_dir": "SW",
    "pressure_mb": 1009,
    "pressure_in": 30.3,
    "precip_mm": 0.1,
    "precip_in": 0,
    "humidity": 82,
    "cloud": 75,
    "feelslike_c": 9.5,
    "feelslike_f": 49.2,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 1,
    "gust_mph": 10.5,
    "gust_kph": 16.9,
    "air_quality": {
      "co": 230.3,
      "no2": 13.5,
      "o3": 54.3,
      "so2": 7.9,
      "pm2_5": 8.6,
      "pm10": 11.3,
      "us-epa-index": 1,
      "gb-defra-index": 1
    }
  }
}

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
					<Route path='today' element={<Today london={london} />} />
					<Route path='hourly' element={<Hourly london={london} />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
