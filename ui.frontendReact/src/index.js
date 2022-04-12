import React from 'react';
import {render} from 'react-dom';
import './index.css';

import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'custom-event-polyfill';

const reactComponentForResourceType = {
	'mysite/components/content/headingdescription': require('./components/HeadingDescription/HeadingDescription').default,
	'cba/components/content/comp2': require('./components/Comp2/Comp2').default
};


const renderApp = () => {
	if (typeof window.document == 'object' && window.callbacks) {
		window.callbacks.forEach((component) => {
			const container = document.getElementById(component.uuid);
			const props = JSON.parse(
				document.getElementById(`${component.uuid}-props`).innerHTML
			);
			const element = React.createElement(
				reactComponentForResourceType[component.resourceType],
				props
			);
			render(
				element,
				container
			);
		});
	}
};

document.addEventListener('DOMContentLoaded', () => {
	renderApp();
});
