/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Space } from 'antd';
import Article from '../components/Article/Article';
import { fetchArticle } from '../store/asyncActions/articles';


function ArticlePage() {


  const dispatch = useDispatch();
  const { article, slug, loading } = useSelector(state => state.articles)

  console.log(article, slug);

  const getArticle = (title) => {
    dispatch(fetchArticle(title))
  }

  useEffect(() => {
    getArticle(slug)
  }, [])

  return (
    <div className='Article container'>
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