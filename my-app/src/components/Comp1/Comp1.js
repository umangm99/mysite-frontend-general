import React from 'react';
import PropTypes from 'prop-types';

const Comp1 = ({title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

Comp1.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default Comp1;
