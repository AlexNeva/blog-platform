/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CheckBox from '../components/Form/CheckBox';
import FormButton from '../components/Form/FormButton';
import FormControl from '../components/Form/FormControl';
import classes from '../components/Form/Form.module.css';
import { fetchRegistration } from '../store/asyncActions/user'



function SignUp() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const goHome = () => navigate('/')

  const {
    register,
    watch,
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
      username,
      usermail,
      userpass1,
    } = data;

    const regBody = {
      "user": {
        "username": username,
        "email": usermail,
        "password": userpass1
      }
    }


    dispatch(fetchRegistration(regBody, goHome))
    reset()
  }

  const password = watch('userpass1')

  return (
    <div
      className='SignUp container'
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
          Create new account
        </div>
        <FormControl
          label='Username'
          id='username'
          type='text'
          name='username'
          placeholder='Username'
          register={register}
          options={
            {
              required: 'Required field',
              minLength: {
                value: 3,
                message: 'username must be from 3 to 20 characters'
              },
              maxLength: {
                value: 20,
                message: 'username must be from 3 to 20 characters'
              }
            }
          }
          errors={errors}

        />
        <FormControl
          label='Email address'
          id='usermail'
          type='text'
          name='usermail'
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
          id='userpass1'
          type='password'
          name='userpass1'
          placeholder='Password'
          register={register}
          options={{
            required: 'Required field',
            minLength: {
              value: 6,
              message: 'username must be from 6 to 40 characters'
            },
            maxLength: {
              value: 40,
              message: 'username must be from 6 to 40 characters'
            }
          }}
          errors={errors}
        />
        <FormControl
          label='Repeat Password'
          id='userpass2'
          type='password'
          name='userpass2'
          placeholder='Password'
          register={register}
          options={{
            required: 'Required field',
            validate: (value) => value === password || 'Passwords must match'
          }}
          errors={errors}
        />
        <hr />
        <CheckBox
          text='I agree to the processing of my personal 
          information'
          id='agree'
          name='agree'
          register={register}
          options={{
            required: 'Required field',
          }}
          errors={errors}
        />
        <FormButton
          text='Create'
        />
        <small>
          Already have an account? <Link to="/sign-in">Sign In</Link>.
        </small>
      </form>
    </div>
  );
}

export default SignUp;