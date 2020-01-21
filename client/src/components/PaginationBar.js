import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as filmsSelectors from '../redux/films/filmsSelectors'
import * as filmsOperations from "../redux/films/filmsOperations";
import * as filmsActions from '../redux/films/filmsActions'
import {pagHelpers} from "../helpers/pagHelpers";

const PaginationBar = ({page, count, setPage, match}) => {
  const arr = pagHelpers(count);
  const currentPage = match.params.page;

  return (
    <div className="center-align">
      <ul className="pagination">

        {page > 1 && (
          <li className="waves-effect">
            <Link
              onClick={(e) => setPage(page - 1)}
              to={`/films/page=${page-1}`}
            >
              <i className="material-icons">chevron_left</i>
            </Link>
          </li>
        )}
        {page <= 1 && (
          <li className="disabled">
              <i className="material-icons">chevron_left</i>
          </li>
        )}

        {arr.map((el, i) => (
          <li key={i}
              className={Number(currentPage) === el ? 'active' :  "waves-effect"}
          >
              <Link onClick={(e) => setPage(el)} to={`/films/page=${el}`}>{el}</Link>
          </li>
        ))}

        {page < count && (
          <li className="waves-effect">
            <Link
              onClick={(e) => setPage(page + 1)}
              to={`/films/page=${page + 1}`}
            >
              <i className="material-icons">chevron_right</i>
            </Link>
          </li>
        )}
        {page >= count && (
          <li className="disabled">
              <i className="material-icons">chevron_right</i>
          </li>
        )}

      </ul>
    </div>
  )
};

const mSTP = state => ({
  page: filmsSelectors.getPaginationPage(state),
  count: filmsSelectors.getPaginationCount(state)
});

const mDTP = {
  fetchFilms: filmsOperations.fetchFilms,
  setPage: filmsActions.paginationPage
};

export default withRouter(connect(mSTP, mDTP)(PaginationBar))

