import React, {useState} from "react";
import {connect} from 'react-redux'
import {Loader} from "../components/Loader";
import * as filmsSelectors from '../redux/films/filmsSelectors';
import * as filmsOperations from '../redux/films/filmsOperations';
import Format from "../components/Select";
import {uniqueStars} from '../helpers/uniqueStars';
import {uniqueFilms} from "../helpers/uniqueFilms";

const AddPage = ({loading, onSubmit, films}) => {
  const [form, setForm] = useState({
    name: '', release: '', format: '', stars: ''
  });

  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const getSelect = (select) => {
    if(select.label !== form.format) {
    setForm({...form, format : select.label});
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const starsUnique = uniqueStars(form.stars);
    const filmsUnique = uniqueFilms(form, films);

    if(form.format === 'Format') {
      alert('Choose format')
    }
    if(!starsUnique) {
      alert('Stars must be unique')
    }
    if(!filmsUnique) {
      alert('Such film is already exist');
    }
    if (!loading && starsUnique && filmsUnique) {
      onSubmit({...form});
    setForm({name: '', release: '', format: '', stars: ''})
    }
  };

  console.log();
  if(loading) {
    return <Loader/>
  }

  return (
    <div>
      {loading && <Loader/>}
      <div className="row" style={{paddingTop: 40}}>
        <form className="col s12" onSubmit={e => handleSubmit(e)}>
          <div className="row">
            <div className="input-field col s6">
              <input required id="film_title" type="text" name='name' value={form.name}
                     onChange={e => changeHandler(e)}/>
              <label htmlFor="film_title">Title</label>
            </div>

            <div className="input-field col s3">
              <input required id="release_data" type="number" min="1850" max="2020" name='release' value={form.release}
                     onChange={e => changeHandler(e)}/>
              <label htmlFor="release_data">Release Data </label>
            </div>

            <div className="input-field col s3 valign-wrapper">
              <Format getSelect={getSelect}/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input required id="films_stars" type="text" name='stars' value={form.stars}
                     onChange={e => changeHandler(e)}/>
              <label htmlFor="films_stars">Stars</label>
            </div>
          </div>

          <div className="row center">
            <button className="btn darken-4 s3 " type='submit'>
              Add Film
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  loading: filmsSelectors.getLoading(state),
  films: filmsSelectors.getAllFilms(state)
})

const mapDispatchToProps = {
  onSubmit: filmsOperations.addFilm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPage);
