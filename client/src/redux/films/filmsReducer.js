import { combineReducers } from 'redux';
import { ActionType } from './actionType';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_SUCCESS:
      return payload.films;

    case ActionType.DELETE_FILM_SUCCESS:
      window.M.toast({html: 'Successfully deleted'});
      return state.filter(item => item._id !== payload.id);

    case ActionType.ADD_FILM_SUCCESS:
      window.M.toast({html: 'Film is creating'});
      return [...state, payload.film];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_REQUEST:
    case ActionType.DELETE_FILM_REQUEST:
    case ActionType.ADD_FILM_REQUEST:
      return true;

    case ActionType.FETCH_FILMS_SUCCESS:
    case ActionType.FETCH_FILMS_ERROR:
    case ActionType.DELETE_FILM_SUCCESS:
    case ActionType.DELETE_FILM_ERROR:
    case ActionType.ADD_FILM_SUCCESS:
    case ActionType.ADD_FILM_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_REQUEST:
    case ActionType.DELETE_FILM_REQUEST:
      return null;

    case ActionType.FETCH_FILMS_ERROR:
    case ActionType.DELETE_FILM_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const searchTitleReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.SEARCH_TITLE_VALUE:
      return payload;
    default:
      return state;
  }
};

const searchStarsReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.SEARCH_STARS_VALUE:
      return payload;
    default:
      return state;
  }
};

const searchMethodReducer = (state = 'title', { type, payload }) => {
  switch (type) {
    case ActionType.SORT_METHOD:
      return payload;
    default:
      return state;
  }
};

const setPaginationPage = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionType.PAGINATION_PAGE:
      return payload;
    default:
      return state;
  }
};

const setPaginationCount = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.PAGINATION_COUNT:
      return payload;
    default:
      return state;
  }
};

const pagination = combineReducers(
  {
    paginationPage: setPaginationPage,
    paginationCount: setPaginationCount,
  }
);


const searchReducers = combineReducers(
  {
    searchValue: searchTitleReducer,
    searchStars: searchStarsReducer,
    sortMethod: searchMethodReducer,
  }
);


export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  pagination : pagination,
  search : searchReducers,

});