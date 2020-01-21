import axios from 'axios';
import {
  paginationCount,
  fetchFilmsRequest,
  fetchFilmsSuccess,
  fetchFilmsError,
  fetchFilmsByIdRequest,
  fetchFilmsByIdSuccess,
  fetchFilmsByIdError,
  deleteFilmRequest,
  deleteFilmSuccess,
  deleteFilmError,
  addFilmRequest,
  addFilmSuccess,
  addFilmError,
} from './filmsActions';

export const fetchFilmById = (id) => dispatch => {
  dispatch(fetchFilmsByIdRequest());
  axios
    .get(`http://localhost:5000/api/film/${id}`)
    .then(response => {
      dispatch(fetchFilmsByIdSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchFilmsByIdError(error));
    });
};

export const fetchFilms = (page) => dispatch => {
  dispatch(fetchFilmsRequest());
  axios
    .get(`http://localhost:5000/api/films/page=${page}`)
    .then(response => {
      dispatch(fetchFilmsSuccess(response.data.items));
      dispatch(paginationCount(response.data.count));
    })
    .catch(error => {
      dispatch(fetchFilmsError(error));
    });
};

export const deleteFilm = id => dispatch => {
  dispatch(deleteFilmRequest());
  axios
    .delete(`http://localhost:5000/api/films/${id}`)
    .then(() => {
      dispatch(deleteFilmSuccess(id));
    })
    .catch(error => {
      dispatch(deleteFilmError(error));
    });
};

export const addFilm = film => dispatch => {
  dispatch(addFilmRequest());
  axios
    .post('http://localhost:5000/api/films', film)
    .then(response => {
      dispatch(addFilmSuccess(response.data));
    })
    .catch(error => {
      dispatch(addFilmError(error));
    });
};