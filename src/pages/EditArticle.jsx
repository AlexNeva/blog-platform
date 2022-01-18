import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FormArticle from '../components/Article/FormArticle';
import { fetchEditArticle, fetchArticle } from '../store/asyncActions/articles';


function EditArticle() {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const { id } = useParams()

  const goPage = () => navigate(`/articles/${id}`)


  const submitHandler = (body) => {

    dispatch(fetchEditArticle(id, body, goPage))

  }

  const { article } = useSelector(state => state.articles)

  const getArticle = (title) => {
    dispatch(fetchArticle(title))
  }

  useEffect(() => {
    getArticle(id)
  }, [])

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