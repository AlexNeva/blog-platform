import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import moment from 'moment';
import { Tag } from 'antd';
import Heart from './Heart';
import classes from './Article.module.css'
import avatar from '../../assets/img/avatar.png'
import { slugAction } from '../../store/articlesReducer'
import { fetchDeleteArticle, fetchAddToFavorited, fetchDelFromFavorited } from '../../store/asyncActions/articles'



function Article({ title, author, updatedAt, tags, descr, favorited, likes, slug, edit, children }) {

  const createdDate = () => moment(updatedAt).utc().format('MMMM D,yy')


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isAuth } = useSelector(state => state.user);

  const goPage = () => navigate('/');


  const getSlug = (slugId) => {
    dispatch(slugAction(slugId))
  }

  const deleteArticle = (slugId) => {
    dispatch(fetchDeleteArticle(slugId, goPage))
  }

  const changeFavorited = (slugId) => {
    if (!favorited) {
      dispatch(fetchAddToFavorited(slugId))
    } else {
      dispatch(fetchDelFromFavorited(slugId))
    }

  }

  return (
    <div className={classes.Article}>
      <div className={classes.ArticleHeader}>
        <Link
          to={`/articles/${slug}`}
          className={classes.ArticleTitle}
          onClick={() => getSlug(slug)}
        >
          {title}
        </Link>

        <button
          type='button'
          className={classes.Likes}
          disabled={!isAuth}
          onClick={() => changeFavorited(slug)}
        >
          <div className={classes.LikesIcon}>
            <Heart filled={favorited} />
          </div>
          <div className={classes.LikesCount}>
            {likes}
          </div>
        </button>
        <div className={classes.ArticleTags}>
          {
            tags.map(tag => <Tag key={uniqid()}>{tag}</Tag>)
          }

        </div>
        <div className={classes.Author}>
          <div className={classes.AuthorInfo}>
            <div className={classes.AuthorName}>
              {author.username}
            </div>
            <div className={classes.AuthorDate}>
              {createdDate()}
            </div>
          </div>
          <div className={classes.AuthorPhoto}>
            {
              author.image !== 'null'
                ? <img src={author.image} alt="" />
                : <img src={avatar} alt="" />
            }

          </div>
        </div>
      </div>
      <div className={classes.ArticleBody}>
        <p className={classes.ArticleDescr}>
          {descr}
        </p>
        {
          isAuth && edit

            ? <div className={classes.ArticleActions}>
              <button
                type='button'
                className={classes.ArticleDelete}
                onClick={() => deleteArticle(slug)}
              >
                Delete
              </button>
              <Link
                to={`/articles/${slug}/edit`}
                className={classes.ArticleEdit}
              >
                Edit
              </Link>
            </div>

            : null
        }

      </div>
      {
        children
      }
    </div>
  );
}

Article.defaultProps = {
  title: '',
  author: {},
  updatedAt: '',
  tags: [],
  descr: '',
  favorited: false,
  likes: 0,
  slug: '',
  children: null,
  edit: false,
};

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.objectOf(PropTypes.any),
  updatedAt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  descr: PropTypes.string,
  favorited: PropTypes.bool,
  likes: PropTypes.number,
  slug: PropTypes.string,
  children: PropTypes.element,
  edit: PropTypes.bool,
};

export default Article;