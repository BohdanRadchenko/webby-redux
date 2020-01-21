import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {handleFileSelect} from "../helpers/handleFileSelect";
import {getArrayContents} from "../helpers/getArrayContents";
import TableFilms from "../components/TableFilms";
import {connect} from 'react-redux';
import * as filmsOperations from '../redux/films/filmsOperations'

const UploadPage = ({uploadFilms}) => {
  const [count, setCount] = useState(0)
  const [uploadAll, setUploadAll] = useState(false);
  const [films, setFilms] = useState([])


  const uploadFile = async (e) => {
    e.persist();
    const fileContents = await handleFileSelect(e);
    const arrayContents = getArrayContents(fileContents);
    createFilmFromArray(arrayContents);
    setUploadAll(false);
    setCount(0);
  };

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
      return arr;
    });
    setFilms(arr)
  };

  const uploadAllFilms = () => {
  setCount(films.length);
  films.map(el => uploadFilms({...el}));
  setUploadAll(true);
  setFilms([]);
  };


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
          <p className='left'>Films : <strong> {films.length}</strong></p>
          <button
            className="btn darken-4 right"
            onClick={uploadAllFilms}
          >
            Upload All Film
          </button>
        </div>
      )}

      {uploadAll && (
        <div>
          <h4 className='center-align'> You have uploaded {count} movies!
            <Link to={'/films'}> Films... </Link>
            or
            <Link to={'/statistics'}> Statistics... </Link>
          </h4>
        </div>
      )}

      {!uploadAll && !!films.length && (
        <TableFilms films={films}/>
      )}

    </div>
  )
}

const mapDispatchToProps = {
  uploadFilms: filmsOperations.addFilm,
};

export default connect(
  null,
  mapDispatchToProps,
)(UploadPage);
