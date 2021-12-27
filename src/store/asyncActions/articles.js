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
    articlesService.getAllArticles(limit, offset)
      .then(res => {
        console.log(res);

        dispatch(getArticlesAction(res.data))
      })
      .catch(err => {
        dispatch(articlesErrorAction(err.message))
      })
  }
)

export const fetchArticle = (slug) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    articlesService.getArticle(slug)
      .then(res => dispatch(getArticleAction(res.data.article)))
      .catch(err => {
        dispatch(articlesErrorAction(err.message))
      })
  }
)

export const fetchCreateArticle = (data) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())
    articlesService.createArticle(data)
      .then(res => {
        console.log(res);

        dispatch(createArticleAction(res.data.article))
      })
      .catch(err => {
        dispatch(articlesErrorAction(err.message))
      })
  }
)

export const fetchEditArticle = (id, data) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())

    articlesService.editArticle(id, data)
      .then(res => {
        console.log(res);

        dispatch(editArticleAction(res.data.article))
      })
      .catch(err => {
        dispatch(articlesErrorAction(err.message))
      })
  }
)


export const fetchDeleteArticle = (id) => (
  (dispatch) => {
    dispatch(articlesLoadingAction())

    articlesService.deleteArtile(id)
      .then(res => {
        console.log(res);

        dispatch(deleteArticleAction())
      })
      .catch(err => {
        dispatch(articlesErrorAction(err.message))
      })
  }
)