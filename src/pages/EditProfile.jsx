/* eslint-disable no-unused-vars */
import React from 'react';
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import FormButton from '../components/Form/FormButton';
import FormControl from '../components/Form/FormControl';
import classes from '../components/Form/Form.module.css';
import { fetchEdit } from '../store/asyncActions/user'

function EditProfile() {

  const token = Cookies.get('token')

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm(
    {
      mode: 'onBlur'
    }
  )
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));

    const {
      username,
      usermail,
      // userpass1,
      avatar,


    } = data;

    const regBody = {
      "user": {
        "email": usermail,
        "token": token,
        "username": username,
        "bio": "",
        "image": avatar
      }
    }

    dispatch(fetchEdit(regBody))


  }





  return (
    <div
      className='EditProfile container'
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
          Edit Profile
        </div>
        <FormControl
          value={user.username}
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
          value={user.email}
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
          label='New password'
          id='userpass1'
          type='password'
          name='userpass1'
          placeholder='New password'
          register={register}
          options={{

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
          label='Avatar image (url)'
          id='avatar'
          type='text'
          name='avatar'
          placeholder='Avatar image'
          register={register}

          errors={errors}
        />


        <FormButton
          text='Save'
        />

      </form>
    </div>
  );
}

export default EditProfile;