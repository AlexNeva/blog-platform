import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { message } from 'antd';

function ErrorsAlert({ children }) {

  const { error: userError } = useSelector(state => state.user);
  const { error: articleError } = useSelector(state => state.articles);

  useEffect(() => {
    if (userError) {
      if (userError.message) {
        message.error(userError.message)
      } else {
        for (const key in userError) {
          if (Object.hasOwnProperty.call(userError, key)) {
            message.error(`${key}: ${userError[key]}`)
          }
        }
      }

      console.log(userError);
    }
  }, [userError])


  useEffect(() => {
    if (articleError) {
      if (articleError.message) {
        message.error(articleError.message)
      } else {
        for (const key in articleError) {
          if (Object.hasOwnProperty.call(articleError, key)) {
            message.error(`${key}: ${articleError[key]}`)
          }
        }
      }

      console.log(articleError);
    }
  }, [articleError])


  return (
    <div>
      {children}
    </div>
  );
}

ErrorsAlert.defaultProps = {
  children: null,
};

ErrorsAlert.propTypes = {
  children: PropTypes.element,
};


export default ErrorsAlert;