import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Form.module.css'


function FormControl(
  { value,
    label,
    id,
    type,
    name,
    placeholder,
    register,
    options,
    errors }
) {

  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])


  return (
    <div className={classes.FormControl}>

      {
        label && <label htmlFor={id}>{label}</label>
      }

      {
        type === 'textarea'

          ? <textarea
            className={errors[name] && classes.error}
            value={inputValue}
            id={id}

            name={name}
            placeholder={placeholder}
            {...register(name, options)}
            onChange={(evt) => setInputValue(evt.target.value)}
          />

          : <input
            className={errors[name] && classes.error}
            value={inputValue}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            {...register(name, options)}
            onChange={(evt) => setInputValue(evt.target.value)}
          />
      }

      {errors[name] && <p className={classes.error}>{errors[name].message || 'ошибка'}</p>}
    </div>
  );
}


FormControl.defaultProps = {
  value: '',
  label: '',
  id: '',
  type: '',
  name: '',
  placeholder: '',
  register: () => { },
  options: {},
  errors: {},
};

FormControl.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.any),
  errors: PropTypes.objectOf(PropTypes.any),

};

export default FormControl;