import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {handleFileSelect} from "../helpers/handleFileSelect";
import {getArrayContents} from "../helpers/getArrayContents";
import {TableFilms} from "../components/TableFilms";
import {connect} from 'react-redux';
import * as filmsOperations from '../redux/films/filmsOperations'

const UploadPage = ({uploadFilms}) => {
  const [films, setFilms] = useState([])

  const createFilmFromArray = (array) => {
    let arr = [];
    array.map(el => {
      const createObj = {
        name: el['Title'],
        release: el['Release Year'],
        format: el['Format'],
        stars: el['Stars'],
      };
      arr = [...arr, createObj];
      uploadFilms({...createObj})
    })
    setFilms(arr)
  }

  const uploadFile = async (e) => {
    e.persist()
    const fileContents = await handleFileSelect(e);
    const arrayContents = getArrayContents(fileContents);
    createFilmFromArray(arrayContents)
  }


  return (
    <div>
      <form action="#">
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input
              type="file"
              accept=".txt"
              onChange={e => uploadFile(e)}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
          </div>
        </div>
      </form>
      {!!films.length && (
        <div>
          <h4 className='center-align'> You have uploaded {films.length} movies!
            <Link to={'/films'}> Films... </Link>
            or
            <Link to={'/statistics'}> Statistics... </Link>
          </h4>
          <TableFilms films={films}/>
        </div>
      )}
    </div>
  )
};

const mapDispatchToProps = {
  uploadFilms: filmsOperations.addFilm,
};

export default connect(
  null,
  mapDispatchToProps,
)(UploadPage);
