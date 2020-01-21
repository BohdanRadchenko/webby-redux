import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as filmsOperations from '../redux/films/filmsOperations'
import * as filmsSelectors from '../redux/films/filmsSelectors'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "../routes";
import {Navbar} from "./Navbar";
import 'materialize-css'

class App extends Component {
  componentDidMount() {
    this.props.fetchFilms(this.props.page);
  }


  render() {
    const routes = useRoutes();
    return(
      <Router>
        <div className="container">
          <Navbar/>
          {routes}
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => ({
  page : filmsSelectors.getPaginationPage(state),
  loading : filmsSelectors.getLoading(state)
});

const mapDispatchToProps = {
  fetchFilms: filmsOperations.fetchFilms,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);