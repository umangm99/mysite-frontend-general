import React from 'react';
import PropTypes from 'prop-types';

const HeadingDescription = ({title, description}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

HeadingDescription.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default HeadingDescription;
