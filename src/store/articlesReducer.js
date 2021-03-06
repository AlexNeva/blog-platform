const initialState = {
  slug: null,
  loading: true,
  error: false,
  articlesList: [],
  articlesCount: 0,
  article: {
    author: {
      username: ''
    },
    favorited: false,
  }
}

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_ERROR = 'FETCH_ERROR';

const FETCH_ARTICLES = 'FETCH_ARTICLES';
const FETCH_ARTICLE = 'FETCH_ARTICLE';

const GET_SLUG = 'GET_SLUG';

const CREATE_ARTICLE = 'CREATE_ARTICLE';
const EDIT_ARTICLE = 'EDIT_ARTICLE';
const DELETE_ARTICLE = 'DELETE_ARTICLE';

const CHANGE_FAVORITED = 'CHANGE_FAVORITED';






export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true }

    case FETCH_ARTICLES:
      return { ...state, loading: false, articlesList: [...action.payload.articles], articlesCount: action.payload.articlesCount }

    case FETCH_ARTICLE:
      return { ...state, loading: false, article: { ...action.payload } }

    case CREATE_ARTICLE:
      return { ...state, loading: false, article: { ...action.payload } }

    case EDIT_ARTICLE:
      return { ...state, loading: false, article: { ...action.payload } }

    case DELETE_ARTICLE:
      return { ...state, loading: false, article: { author: { username: '' }, ...action.payload } }

    case GET_SLUG:
      return { ...state, slug: action.payload }

    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false }

    case CHANGE_FAVORITED:
      return {
        ...state,
        articlesList: [...state.articlesList.map(article => (
          article.slug === action.payload.slug
            ? { ...article, favorited: !article.favorited, favoritesCount: action.payload.favoritesCount }
            : article
        ))],
        article: { ...action.payload }
      }


    default:
      return state
  }
}

export const articlesLoadingAction = (payload) => ({ type: FETCH_LOADING, payload })
export const articlesErrorAction = (payload) => ({ type: FETCH_ERROR, payload })

export const getArticlesAction = (payload) => ({ type: FETCH_ARTICLES, payload })
export const getArticleAction = (payload) => ({ type: FETCH_ARTICLE, payload })

export const createArticleAction = (payload) => ({ type: CREATE_ARTICLE, payload })

export const editArticleAction = (payload) => ({ type: EDIT_ARTICLE, payload })

export const deleteArticleAction = (payload) => ({ type: DELETE_ARTICLE, payload })


export const slugAction = (payload) => ({ type: GET_SLUG, payload })


export const favoritedAction = (payload) => ({ type: CHANGE_FAVORITED, payload })