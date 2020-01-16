import React from 'react';

export const TableFilms = ({films}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Release Year</th>
        <th>Format</th>
        <th>Stars</th>
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
        </tr>
      ))}
      </tbody>
    </table>
  );
};