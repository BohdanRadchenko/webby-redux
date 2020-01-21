import {ActionType} from './actionType'


// PAGINATION
export const paginationPage = (page) => ({
  type: ActionType.PAGINATION_PAGE,
  payload : page
});

export const paginationCount = (count) => ({
  type: ActionType.PAGINATION_COUNT,
  payload : count
});

// FETCH FILM BY ID
export const fetchFilmsByIdRequest = () => ({
  type: ActionType.FETCH_FILMS__BY_ID_REQUEST,
});

export const fetchFilmsByIdSuccess = films => ({
  type: ActionType.FETCH_FILMS__BY_ID_SUCCESS,
  payload : {
    films,
  }
});

export const fetchFilmsByIdError = error => ({
  type: ActionType.FETCH_FILMS__BY_ID_ERROR,
  payload : {
    error,
  }
});


// FETCH FILMS
export const fetchFilmsRequest = () => ({
  type: ActionType.FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = films => ({
  type: ActionType.FETCH_FILMS_SUCCESS,
  payload : {
    films,
  }
});

export const fetchFilmsError = error => ({
  type: ActionType.FETCH_FILMS_ERROR,
  payload : {
    error,
  }
});

// DELETE FILMS
export const deleteFilmRequest = () => ({
  type: ActionType.DELETE_FILM_REQUEST,
});

export const deleteFilmSuccess = id => ({
  type: ActionType.DELETE_FILM_SUCCESS,
  payload: {
    id,
  },
});

export const deleteFilmError = error => ({
  type: ActionType.DELETE_FILM_ERROR,
  payload: {
    error,
  },
});

// ADD FILM
export const addFilmRequest = () => ({
  type: ActionType.ADD_FILM_REQUEST,
});

export const addFilmSuccess = film => ({
  type: ActionType.ADD_FILM_SUCCESS,
  payload: {
    film,
  },
});

export const addFilmError = error => ({
  type: ActionType.ADD_FILM_ERROR,
  payload: {
    error,
  },
});


export const uploadFilmsError = error => ({
  type: ActionType.ADD_FILM_ERROR,
  payload: {
    error,
  },
});


// SEARCH FILMS
export const searchFilmsTitle = value => ({
  type: ActionType.SEARCH_TITLE_VALUE,
  payload: value
});

export const searchFilmsStars = value => ({
  type: ActionType.SEARCH_STARS_VALUE,
  payload: value
});

// SORT FILMS
export const sortFilmsMethod = value => ({
  type: ActionType.SORT_METHOD,
  payload: value
});

//ADVANCED SEARCH
export const advancedSearch = form  => ({
  type: ActionType.ADVANCED_SEARCH,
  payload: form
});


