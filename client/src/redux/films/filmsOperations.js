import axios from 'axios';
import {
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
      .get(`http://localhost:5000/api/films/${id}`)
      .then(response => {
        dispatch(fetchFilmsByIdSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchFilmsByIdError(error));
      });
  };

export const fetchFilms = () => dispatch => {
 dispatch(fetchFilmsRequest());
 axios
   .get('http://localhost:5000/api/films')
   .then(response => {
    dispatch(fetchFilmsSuccess(response.data));
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
