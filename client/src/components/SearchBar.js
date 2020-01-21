import React from "react";
import {connect} from 'react-redux'
import * as filmsSelectors from '../redux/films/filmsSelectors'
import * as filmsActions from '../redux/films/filmsActions'

const SearchBar = ({getSearch, searchValue}) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Search film"
              id="search"
              type="text"
              value={searchValue}
              onChange={e => getSearch(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  searchValue : filmsSelectors.getSearchTitle(state)
})

const mapDispatchToProps = (dispatch) => ({
  getSearch: (value) => dispatch(filmsActions.searchFilmsTitle(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)