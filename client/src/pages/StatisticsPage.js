import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader";
import * as filmsSelectors from "../redux/films/filmsSelectors";
import * as filmsOperations from "../redux/films/filmsOperations";

const StatisticsPage = ({loading, films, onDeleteFilm}) => {

  const deleteAll = () => {
    films.map(el => {
      return onDeleteFilm(el._id)
    })
  };

  const deleteHandler = (el) => {
    onDeleteFilm(el._id)
  };


  if (loading) {
    return <Loader/>
  }

  return (

    <div>
      {!films.length &&
      (
        <div>
          <h4 className='center-align'>No movies yet!
            <Link to={'/upload'}> Upload.. </Link>
            or
            <Link to={'/create'}> Add... </Link>
          </h4>
        </div>
      )}

      {!!films.length &&
      (
        <div style={{padding: 40}}>
          <p className='left'>Films : <strong> {films.length}</strong></p>
          <button
            className="btn grey lighten-1 black-text right"
            onClick={deleteAll}
          >
            Delete All Film
          </button>

          <table>
            <thead>
            <tr>
              <th>№</th>
              <th>Title</th>
              <th>Release Year</th>
              <th>Format</th>
              <th>Open</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {films.map((el, i) => {
              return (
                <tr key={el._id}>
                  <td>{i + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.release}</td>
                  <td>{el.format}</td>
                  <td>
                    <Link to={`/films/${el._id}`}>open</Link>
                  </td>
                  <td>
                    <button
                      className="btn darken-4"
                      disabled={loading}
                      onClick={e => deleteHandler(el)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      )
      }
    </div>
  )
};

const mapStateToProps = state => ({
  films: filmsSelectors.getAllFilms(state),
  loading: filmsSelectors.getLoading(state),
});


const mapDispatchToProps = {
  onDeleteFilm: filmsOperations.deleteFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage)