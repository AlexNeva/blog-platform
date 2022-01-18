import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


function Private({ children }) {


  const location = useLocation();
  const { isAuth, fetching } = useSelector((state) => state.user)

  if (!isAuth && !fetching) {
    return <Navigate to='/sign-in' state={{ from: location }} />
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