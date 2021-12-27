/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Space } from 'antd';
import Article from '../components/Article/Article';
import { fetchArticle } from '../store/asyncActions/articles';


function ArticlePage() {


  const dispatch = useDispatch();
  const { article, loading } = useSelector(state => state.articles)

  const { id } = useParams()

  console.log(id);

  const getArticle = (title) => {
    dispatch(fetchArticle(title))
  }

  useEffect(() => {
    getArticle(id)
  }, [])

  return (
    <div
      className='Article container'
      style={{
        paddingTop: 25,
        paddingBottom: 25,

      }}
    >
      {
        loading

          ? <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>

          : <Article
            title={article.title}
            author={article.author}
            createdAt={article.createdAt}
            tags={article.tagList}
            descr={article.description}
            favorited={article.favorited}
            likes={article.favoritesCount}
            slug={id}
            edit='true'
          >
            <div>
              {
                article.body
              }
            </div>
          </Article>
      }

    </div>
  );
}

export default ArticlePage;