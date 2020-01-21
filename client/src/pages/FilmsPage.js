import React, {useEffect} from "react";
import {Link, withRouter} from 'react-router-dom';
import {sortFilmsByMethod} from "../helpers/sortFilmsByMethod";
import {connect} from 'react-redux'
import SearchBar from "../components/SearchBar";
import SortCard from '../components/SortCard'
import {FilmsList} from "../components/FilmsList";
import {Loader} from '../components/Loader'
import * as filmsSelectors from '../redux/films/filmsSelectors'
import * as filmsAction from '../redux/films/filmsActions'
import PaginationBar from "../components/PaginationBar";


const FilmsPage = ({loading, films, method, allFilms, paginationPage, match}) => {
  const sortFilms = sortFilmsByMethod(films, method);
  const currentPage = match.params.page;
  useEffect(() => {
    paginationPage(currentPage)
  });

  if (loading) {
    return <Loader/>
  }
  return (
    <div>
      <SearchBar/>
      {!!films.length && (
        <>
          <SortCard/>
          <FilmsList items={sortFilms}/>
        </>
      )}

      {!allFilms.length &&
      (
        <div>
          <h4 className='center-align'>No movies yet!
            <Link to={'/upload'}> Upload.. </Link>
            or
            <Link to={'/create'}> Add... </Link>
          </h4>
        </div>
      )}

      {allFilms.length !== 0 && films.length === 0 && (
        <div>
          <h4 className='center-align'>No matching results!</h4>
        </div>
      )}

      <PaginationBar />

    </div>

  )
};

const mapStateToProps = state => ({
  allFilms: filmsSelectors.getAllFilms(state),
  films: filmsSelectors.getSearchFilms(state),
  method: filmsSelectors.getSortMethod(state),
  loading: filmsSelectors.getLoading(state)
})

const mapDispatchToProps = {
  paginationPage : filmsAction.paginationPage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmsPage))