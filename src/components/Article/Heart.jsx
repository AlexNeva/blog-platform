import React from 'react';
import PropTypes from 'prop-types';

function Heart({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2.56911C7.26154 1.33835 6.03077 0.476807 4.55385 0.476807C2.46154 0.476807 0.861542 2.07681 0.861542 4.16911C0.861542 8.23065 3.07693 8.84604 8 13.523C12.9231 8.84604 15.1385 8.23065 15.1385 4.16911C15.1385 2.07681 13.5385 0.476807 11.4462 0.476807C9.96923 0.476807 8.73846 1.33835 8 2.56911Z"
        fill={filled ? "#FF0707" : "transparent"}
        stroke={filled ? "#FF0707" : "#000000"}
        strokeWidth="1"
        fillOpacity={filled ? 1 : 0.75}
      />
    </svg>
  );
}

Heart.defaultProps = {
  filled: false,
};

Heart.propTypes = {
  filled: PropTypes.bool,
};

export default Heart;