/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { Pagination, Spin, Space } from 'antd';

import { fetchArticles } from '../../store/asyncActions/articles'

import Article from './Article';
import classes from './Article.module.css'



function ArticleList() {

  const dispatch = useDispatch();

  const getArticles = (limit, offset) => {
    dispatch(fetchArticles(limit, offset))
  }


  const { articlesList: articles, loading, articlesCount } = useSelector(state => state.articles)
  // const { favorited } = useSelector(state => state.articles.article)

  useEffect(() => {
    getArticles(5, 0)
  }, [])




  console.log(articles);

  return (
    <div className={classes.ArticleList}>
      {
        loading

          ? <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>

          : articles.map(article => <Article
            key={uniqid()}
            title={article.title}
            author={article.author}
            updatedAt={article.updatedAt}
            tags={article.tagList}
            descr={article.description}
            favorited={article.favorited}
            likes={article.favoritesCount}
            slug={article.slug}
          />)


      }

      {
        !!articlesCount && <Pagination
          defaultCurrent={1}
          defaultPageSize={5}
          total={articlesCount}
          onChange={(page) => getArticles(5, (page - 1) * 5)}
          showSizeChanger={false}
          hideOnSinglePage={true}
        />
      }




    </div>
  );
}

export default ArticleList;