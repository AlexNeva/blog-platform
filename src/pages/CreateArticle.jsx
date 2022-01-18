import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchCreateArticle } from '../store/asyncActions/articles'

import FormArticle from '../components/Article/FormArticle';

function CreateArticle() {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const goPage = () => navigate('/')

  const submitHandler = (body) => {
    dispatch(fetchCreateArticle(body, goPage))
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