import React, {useState} from 'react'
import Pagination from "react-js-pagination";
import {connect} from 'react-redux';
import * as filmsSelectors from '../redux/films/filmsSelectors'
import {pagHelpers} from "../helpers/pagHelpers";

const PaginationBar = ({page, count}) => {
  console.log('page', page);
  console.log('count', count);
  const arr = pagHelpers(count)
  console.log('arr', arr)


  return (
    <div className="center-align">
      <ul className="pagination">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <li className="active"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  )
};

const mapStateToProps = state => ({
  page: filmsSelectors.getPaginationPage(state),
  count: filmsSelectors.getPaginationCount(state)
});

export default connect(mapStateToProps, null)(PaginationBar)

