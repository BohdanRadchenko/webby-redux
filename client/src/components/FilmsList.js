import React from "react";
import {CardFilms} from './CardFilms'

export const FilmsList = ({items}) => {
  return (
    <ul style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}} >
      {items.map((el) => {
        return (
          <li key={el._id} style={{width: '30%'}}>
            <CardFilms {...el}/>
          </li>
        )
      })}
    </ul>
  )
}