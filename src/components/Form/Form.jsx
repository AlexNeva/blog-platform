import React from 'react';
import PropTypes from 'prop-types';
import classes from './Form.module.css'

function Form({ title, children, submitHandler }) {
  return (
    <form
      className={classes.Form}
      onSubmit={(evt) => {
        evt.preventDefault();
        submitHandler()
      }}>
      <div className={classes.FormTitle}>
        {title}
      </div>
      {children}
    </form>
  );
}

Form.defaultProps = {
  title: '',
  children: null,
  submitHandler: () => { }
};

Form.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  submitHandler: PropTypes.func
};


export default Form;