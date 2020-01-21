import React, {useState} from "react";
import {searchFilmsByForm} from '../helpers/searchFilmsByForm'
import {FilmsList} from "../components/FilmsList";
import {Loader} from "../components/Loader";
import {connect} from 'react-redux'
import * as filmsSelectors from '../redux/films/filmsSelectors'
import * as filmsActions from "../redux/films/filmsActions";

const SearchPage = ({loading, films, advancedSearch}) => {
  const [form, setForm] = useState({})
  const [searchFilm, setSearchFilm] = useState([])
  const [sub, setSub] = useState(false)

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
    setSub(false)
  };

  const submitHandler = (e) => {
    e.preventDefault()
    setSearchFilm(searchFilmsByForm(films, form));
    setSub(true)
  }

  const pressHandler = (e) => {
    if (e.key !== 'Enter') {
    return
    }
    submitHandler(e)
  }

  if (loading) {
    return <Loader/>
  }


  return (
    <>
      <div className="row" style={{paddingTop: 40}}>
        <form className="col s12" onSubmit={e => submitHandler(e)}>
          <div className="row col s8">
            <div className="input-field col s6">
              <input id="film_title" type="text" name='name' onChange={e => changeHandler(e)} onKeyPress={e => pressHandler(e)}/>
              <label htmlFor="film_title">Title</label>
            </div>
            <div className="input-field col s6">
              <input id="film_stars" type="text" name='stars' onChange={e => changeHandler(e)} onKeyPress={e => pressHandler(e)}/>
              <label htmlFor="film_stars">Stars </label>
            </div>
          </div>
          <div className="row center">
            <button className="btn darken-4 s3 " type='submit'>
              Search Films
            </button>
          </div>
        </form>
      </div>

      {searchFilm.length !== 0 && (form.name || form.stars) &&
      <FilmsList items={searchFilm}/>
      }

      {searchFilm.length === 0 && sub && (
        <div >
          <h4 className='center-align'>No matching results!</h4>
        </div>
      )}
    </>
  )
};

const mapStateToProps = state => ({
  loading : filmsSelectors.getLoading(state),
  advancedSearch : filmsSelectors.getAdvancedSearch(state),
  films : filmsSelectors.getAllFilms(state)
})

const mapDispatchToProps = {
  advancedSearch: filmsActions.advancedSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)