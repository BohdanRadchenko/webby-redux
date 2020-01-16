import React, {} from 'react'
import {NavLink} from "react-router-dom";

export const CardFilms = ({name, _id}) => {
  return (
        <div>
          <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{name}</span>
          </div>
          <div className="card-action">
            <NavLink to={`/films/${_id}`}  className="btn yellow darken-4">More...</NavLink>
          </div>
            <div className="card-action">
            </div>
        </div>
      </div>
  )
}