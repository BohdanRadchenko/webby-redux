import React from 'react';
import {withRouter} from 'react-router-dom';
import DetailFilms from '../components/DetailFilms'
import {Loader} from '../components/Loader';


const DetailPage = ({loading, match, history}) => {
  const pathId = match.params.id;

  const backHistory = () => {
    history.goBack()
  };

  const pushHistory = (path) => {
    history.push(path)
  }

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      {!loading && <DetailFilms {...{pathId, backHistory, pushHistory}}/>}
    </>
  )

};

export default withRouter(DetailPage);