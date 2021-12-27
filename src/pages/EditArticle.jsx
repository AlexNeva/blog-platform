/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import FormArticle from '../components/Article/FormArticle';
import { fetchEditArticle } from '../store/asyncActions/articles'

function EditArticle() {

  const dispatch = useDispatch()

  const { id } = useParams()
  console.log(id);

  const submitHandler = (body) => {

    dispatch(fetchEditArticle(id, body))

  }

  const { article } = useSelector(state => state.articles)

  return (
    <div
      className='EditArticle container'
      style={{
        paddingTop: 34,
        paddingBottom: 34,

      }}
    >
      <FormArticle
        header='Edit article'
        title={article.title}
        descr={article.description}
        body={article.body}
        submitHandler={submitHandler}
      />
    </div>
  );
}

export default EditArticle;