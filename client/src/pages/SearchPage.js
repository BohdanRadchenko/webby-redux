import React, {useCallback, useEffect, useState} from "react";
import {searchFilmsByForm} from '../helpers/searchFilmsByForm'
import {FilmsList} from "../components/FilmsList";
import {Loader} from "../components/Loader";
import {useHttp} from "../hooks/http.hook";

const SearchPage = () => {
  const {loading, request} = useHttp()
  const [form, setForm] = useState({})
  const [films, setFilms] = useState([])
  const [searchFilms, setSearchFilms] = useState([])
  const [sub, setSub] = useState(false)

  const fetchFilms = useCallback(async () => {
    try {
      const fetched = await request('/api/films', 'GET', null)
      setFilms(fetched)
    } catch (e) {
    }
  }, [request])

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSearchFilms(searchFilmsByForm(films, form.name, form.stars ))
    setSub(true)
  }

  const pressHandler = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    submitHandler(e)
  }

  useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

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

      {searchFilms  &&
      <FilmsList items={searchFilms}/>
      }

      {searchFilms.length === 0 && sub && (
        <div >
          <h4 className='center-align'>No matching results!</h4>
        </div>
      )}

    </>
  )
};

export default SearchPage
