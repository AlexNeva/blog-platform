import PostsService from "../../API/PostsService"
import {
  articlesActionSuccess,
  articlesActionStart,
  articlesActionError,
  articleActionSuccess,
  articleActionStart,
  articleActionError,

} from '../articlesReducer'


const postService = new PostsService()



export const fetchArticles = (limit, offset) => (
  (dispatch) => {
    dispatch(articlesActionStart())
    try {
      postService.getAllArticles(limit, offset)
        .then(res => dispatch(articlesActionSuccess(res.articles)))
    } catch (error) {
      dispatch(articlesActionError())
    }

  }
)

export const fetchArticle = (slug) => (
  (dispatch) => {
    dispatch(articleActionStart())
    try {
      postService.getArticle(slug)
        .then(res => dispatch(articleActionSuccess(res.article)))
    } catch (error) {
      dispatch(articleActionError())
    }
  }
)