import React from 'react';
import {connect} from 'react-redux'
import * as filmsOperations from "../redux/films/filmsOperations";

 const TableFilms = ({films, onAddFilm}) => {

   const addHandler = (el) => {
     onAddFilm(el)
   };

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Release Year</th>
        <th>Format</th>
        <th>Stars</th>
        <th>Add</th>
      </tr>
      </thead>
      <tbody>
      {films.map((el, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{el.name}</td>
          <td>{el.release}</td>
          <td>{el.format}</td>
          <td>{el.stars}</td>
          <td> <button
            className="btn darken-4 right"
            onClick={e => addHandler(el, i)}
          >
            Add
          </button></td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

const mapDispatchToProps =  {
  onAddFilm: filmsOperations.addFilm,
}

export default connect(null, mapDispatchToProps)(TableFilms)