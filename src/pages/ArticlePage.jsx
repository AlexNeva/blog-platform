/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Space } from 'antd';
import Article from '../components/Article/Article';
import { fetchArticle } from '../store/asyncActions/articles';


function ArticlePage() {


  const dispatch = useDispatch();
  const { article, loading } = useSelector(state => state.articles);

  const { username: profileName } = useSelector(state => state.user.user);

  const { username: author } = useSelector(state => state.articles.article.author)

  const { id } = useParams()

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
            updatedAt={article.updatedAt}
            tags={article.tagList}
            descr={article.description}
            favorited={article.favorited}
            likes={article.favoritesCount}
            slug={id}
            edit={profileName === author}
          >
            <div>
              <ReactMarkdown children={article.body} remarkPlugins={[remarkGfm]} />

            </div>
          </Article>
      }

    </div>
  );
}

export default ArticlePage;