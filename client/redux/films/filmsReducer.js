import { combineReducers } from 'redux';
import { ActionType } from './actionType';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FILMS_SUCCESS:
      console.log('FETCH_FILMS_SUCCESS', state)
      console.log('FETCH_FILMS_SUCCESS', payload)
      return payload.films;

    case ActionType.DELETE_FILM_SUCCESS:
      console.log('DELETE_FILM_SUCCESS', state)
      return state.filter(item => item.id !== payload.id);

    case ActionType.ADD_FILM_SUCCESS:
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



const searchReducers = combineReducers(
  {
    searchValue: searchTitleReducer,
    searchStars: searchStarsReducer,
    sortMethod: searchMethodReducer,
  }
)

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  search : searchReducers,

});