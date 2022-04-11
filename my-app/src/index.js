import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const reactComponentForResourceType = {
    'cba/components/content/comp1': require('./components/Comp1/Comp1').default,
    'cba/components/content/comp2': require('./components/Comp2/Comp2').default
};

