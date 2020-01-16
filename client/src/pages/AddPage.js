import React, {useState} from "react";
import {connect} from 'react-redux'
import {Loader} from "../components/Loader";
import * as filmsOperations from '../redux/films/filmsOperations'

const AddPage = ({loading, onSubmit}) => {
  const [form, setForm] = useState({
    name: '', release: '', format: '', stars: ''
  })


  const changeHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!loading) {
      onSubmit({...form});
    setForm({name: '', release: '', format: '', stars: ''})
    }
  };


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
              <input required id="release_data" type="text" name='release' value={form.release}
                     onChange={e => changeHandler(e)}/>
              <label htmlFor="release_data">Release Data </label>
            </div>

            <div className="input-field col s3">
              <input required id="films_format" type="text" name='format' value={form.format}
                     onChange={e => changeHandler(e)}/>
              <label htmlFor="films_format">Format</label>
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
const mapDispatchToProps = {
  onSubmit: filmsOperations.addFilm,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddPage);
