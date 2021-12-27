import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCreateArticle } from '../store/asyncActions/articles'

import FormArticle from '../components/Article/FormArticle';

function CreateArticle() {

  const dispatch = useDispatch()

  const submitHandler = (body) => {
    dispatch(fetchCreateArticle(body))
  }

  return (
    <div
      className='CreateArticle container'
      style={{
        paddingTop: 34,
        paddingBottom: 34,

      }}>
      <FormArticle
        header='Create new article'
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default CreateArticle;