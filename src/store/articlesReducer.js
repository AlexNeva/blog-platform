const initialState = {
  slug: '',
  loading: true,
  error: false,
  articlesList: [],
  article: {

  }
}

const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START';
const FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR';


const GET_SLUG = 'GET_SLUG'


export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return { ...state, loading: true }
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, loading: false, articlesList: [...action.payload] }
    case FETCH_ARTICLES_ERROR:
      return { ...state, error: true, loading: false }

    case FETCH_ARTICLE_START:
      return { ...state, loading: true }
    case FETCH_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: { ...action.payload } }
    case FETCH_ARTICLE_ERROR:
      return { ...state, error: true, loading: false }


    case GET_SLUG:
      return { ...state, slug: action.payload }

    default:
      return state
  }
}

export const articlesActionSuccess = (payload) => ({ type: FETCH_ARTICLES_SUCCESS, payload })
export const articlesActionStart = (payload) => ({ type: FETCH_ARTICLES_START, payload })
export const articlesActionError = (payload) => ({ type: FETCH_ARTICLES_ERROR, payload })


export const articleActionSuccess = (payload) => ({ type: FETCH_ARTICLE_SUCCESS, payload })
export const articleActionStart = (payload) => ({ type: FETCH_ARTICLE_START, payload })
export const articleActionError = (payload) => ({ type: FETCH_ARTICLE_ERROR, payload })



export const slugAction = (payload) => ({ type: GET_SLUG, payload })
