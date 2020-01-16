import React from "react";
import {connect} from 'react-redux';
import * as filmsAction from '../redux/films/filmsActions'

const SortCard = ({getSortMethod}) => {

  return (
    <div className="row">
          <div className="card-action">
            <button
              className="btn waves-effect grey lighten-1 right"
              style={{margin:10}}
              name = 'title'
              onClick={(e) => getSortMethod(e.target.name)}
            >
              Sort by Title
            </button>

            <button
              className="btn waves-effect grey lighten-1 right"
              style={{margin:10}}
              name = 'release'
              onClick={(e) => getSortMethod(e.target.name)}
            >
              Sort by Release Year
            </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getSortMethod : (method) => dispatch(filmsAction.sortFilmsMethod(method))
})

export default connect(null, mapDispatchToProps)(SortCard)