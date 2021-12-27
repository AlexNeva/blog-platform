import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.module.css'


function FormButton({ text }) {
  return (
    <button type='submit' className={classes.FormButton}>
      {
        text
      }
    </button>
  );
}

FormButton.defaultProps = {
  text: '',
};

FormButton.propTypes = {
  text: PropTypes.string
};

export default FormButton;