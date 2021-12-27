import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


function Private({ children }) {

  const { isAuth } = useSelector((state) => state.user)

  if (!isAuth) {
    return <Navigate to='sign-in' />
  }

  return children
}

Private.defaultProps = {

  children: null,
};

Private.propTypes = {

  children: PropTypes.element,
};

export default Private;