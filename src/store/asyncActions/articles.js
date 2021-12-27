import ArticlesService from "../../API/services/ArticlesService"
import {
  articlesLoadingAction,
  articlesErrorAction,
  getArticlesAction,
  getArticleAction,
  createArticleAction,
  editArticleAction,
  deleteArticleAction


} from '../articlesReducer'


const articlesService = new ArticlesService()

export const fetchArticles = (limit, offset) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    try {
      articlesService.getAllArticles(limit, offset)
        .then(res => {
          console.log(res);

          dispatch(getArticlesAction(res.data))
        })
    } catch (error) {
      dispatch(articlesErrorAction())
    }

  }
)

export const fetchArticle = (slug) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    try {
      articlesService.getArticle(slug)
        .then(res => dispatch(getArticleAction(res.data.article)))
    } catch (error) {
      dispatch(articlesErrorAction())
    }
  }
)

export const fetchCreateArticle = (data) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    try {
      articlesService.createArticle(data)
        .then(res => {
          console.log(res);

          dispatch(createArticleAction(res.data.article))
        })
    } catch (error) {
      dispatch(articlesErrorAction())
    }
  }
)

export const fetchEditArticle = (id, data) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    try {
      articlesService.editArticle(id, data)
        .then(res => {
          console.log(res);

          dispatch(editArticleAction(res.data.article))
        })
    } catch (error) {
      dispatch(articlesErrorAction())
    }
  }
)


export const fetchDeleteArticle = (id) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    try {
      articlesService.deleteArtile(id)
        .then(res => {
          console.log(res);

          dispatch(deleteArticleAction())
        })
    } catch (error) {
      dispatch(articlesErrorAction())
    }
  }
)