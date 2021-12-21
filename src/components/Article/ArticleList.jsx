/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { Pagination, Spin, Space } from 'antd';

import { fetchArticles } from '../../store/asyncActions/articles'

import Article from './Article';
import classes from './Article.module.css'






function ArticleList() {

  const dispatch = useDispatch();
  const { articlesList: articles, loading } = useSelector(state => state.articles)

  console.log(articles);

  const getArticles = (limit, offset) => {
    dispatch(fetchArticles(limit, offset))
  }

  useEffect(() => {
    getArticles(5, 0)
  }, [])

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
            createdAt={article.createdAt}
            tags={article.tagList}
            descr={article.description}
            favorited={article.favorited}
            likes={article.favoritesCount}
            slug={article.slug}
          />)


      }



      < Pagination
        style={{
          display: loading ? 'none' : 'flex'
        }}
        defaultCurrent={1}
        total={50}
        onChange={(page) => getArticles(5, page - 1)}
      />







    </div>
  );
}

export default ArticleList;