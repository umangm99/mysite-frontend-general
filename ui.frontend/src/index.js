import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'custom-event-polyfill';

import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';

const MapTo = {
	'cba/components/content/comp1': require('./components/Comp1/Comp1').default,
	'cba/components/content/comp2': require('./components/Comp2/Comp2').default
};

const renderApp = () => {
	// if (typeof window.document == 'object' && window.callbacks) {
	// 	window.callbacks.forEach((component) => {
	// 		const container = document.getElementById(component.uuid);
	// 		const props = JSON.parse(
	// 			document.getElementById(`${component.uuid}-props`).innerHTML
	// 		);
	// 		const element = React.createElement(
	// 			MapTo[component.resourceType],
	// 			props
	// 		);
	// 		render(
	// 			element,
	// 			container
	// 		);
	// 	});
	// }
	render(
		<div>
			<App/>
		</div>,
		document.getElementById('spa-root')
	);
};


document.addEventListener('DOMContentLoaded', () => {
	renderApp();
});
