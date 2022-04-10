import React from 'react';
import PropTypes from 'prop-types';

const Comp2 = ({ title, description }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Comp2.defaultProps = {
  title: '',
  description: ''
};

Comp2.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Comp2;
