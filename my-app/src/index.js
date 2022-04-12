import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reactComponentForResourceType = {
    'cba/components/content/comp1': require('./components/Comp1/Comp1').default,
    'cba/components/content/comp2': require('./components/Comp2/Comp2').default
};


if (typeof window.document == 'object'&& window.callbacks) {
    window.callbacks.forEach((component) => {
        const container = document.getElementById(component.uuid);
        const props = JSON.parse(
            document.getElementById(`${component.uuid}-props`).innerHTML
        );
        const element = React.createElement(
            reactComponentForResourceType[component.resourceType],
            props
        );
        ReactDOM.render(
            element,
            container
        );
    });
}
