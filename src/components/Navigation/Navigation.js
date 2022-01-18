import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
	return (
		<div>
			<ul>
				<Link to='today'>
					<li>Today</li>
				</Link>
				<Link to='hourly'>
					<li>Hourly</li>
				</Link>
				{/* <Link to='weekend'>
					<li>Weekend</li>
				</Link>
				<Link to='monthly'>
					<li>Monthly</li>
				</Link> */}
			</ul>
		</div>
	);
}

export default Navigation;
