import React from 'react'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {Loader} from "./Loader";

import * as filmsSelectors from "../redux/films/filmsSelectors";
import * as filmsOperations from "../redux/films/filmsOperations";

const DetailFilms = ({loading, films, onDeleteFilm, pathId}) => {
  const history = useHistory();
  const handlerBack = () => {
    history.goBack()
  };

  const film = films.filter(el => el._id === pathId)[0];

  const handleDelete = (id) => {
    if(window.confirm("Do you really want to delete this film")) {
      onDeleteFilm(id);
      history.push('/')
    }
  };

  if (loading) {
    return <Loader/>
  }

  if (!film) {
    return (
      <div>
        <h4 className='center-align'>Page not found!
          <Link to={'/upload'}> Upload.. </Link>
          or
          <Link to={'/create'}> Add... </Link>
        </h4>
      </div>
    )
  }

  if (film) {

    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">About Film</span>
              <p>Title: <strong> {film.name}</strong></p>
              <p>Release Year: <strong> {film.release}</strong></p>
              <p>Format: <strong> {film.format}</strong></p>
              <p>Stars: <strong> {film.stars}</strong></p>
            </div>
            <div className="card-action">
              <button
                className="btn grey lighten-1 black-text"
                // onClick={}
                onClick={() => handleDelete(film._id)}
                disabled={loading}
              >
                Delete film
              </button>
              <button
                className="btn darken-4 right"
                onClick={handlerBack}
                disabled={loading}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  films: filmsSelectors.getAllFilms(state),
  loading: filmsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onDeleteFilm: filmsOperations.deleteFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailFilms)