/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormButton from '../components/Form/FormButton';
import FormControl from '../components/Form/FormControl';
import classes from '../components/Form/Form.module.css';
import { fetchLogin } from '../store/asyncActions/user'


function SignIn() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const goHome = () => navigate('/')

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset
  } = useForm(
    {
      mode: 'onBlur'
    }
  )

  const onSubmit = (data) => {

    const {
      loginmail,
      loginpass,

    } = data;

    const regBody = {
      "user": {
        "email": loginmail,
        "password": loginpass
      }
    }

    console.log(data);


    dispatch(fetchLogin(regBody, goHome))

    reset()
  }


  return (
    <div
      className='SignIn container'
      style={{
        paddingTop: 59,
        paddingBottom: 59,
      }}
    >
      <form
        className={classes.Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.FormTitle}>
          Sign In
        </div>

        <FormControl
          label='Email address'
          id='loginmail'
          type='email'
          name='loginmail'
          placeholder='Email address'
          register={register}
          options={{
            required: 'Required field',
            pattern: {
              value: /.+@.+\..+/i,
              message: 'Enter the correct email'
            }
          }}
          errors={errors}
        />
        <FormControl
          label='Password'
          id='loginpass'
          type='password'
          name='loginpass'
          placeholder='Password'
          register={register}
          options={{
            required: 'Required field',
          }}
          errors={errors}
        />

        <FormButton
          text='Login'
        />
        <small>
          Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
        </small>
      </form>
    </div>
  );
}

export default SignIn;