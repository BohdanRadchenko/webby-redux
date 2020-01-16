import React from 'react';
import {withRouter} from 'react-router-dom';
import DetailFilms from '../components/DetailFilms'
import {Loader} from '../components/Loader';


const DetailPage = ({loading, match}) => {
  const pathId = match.params.id;

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      {!loading && <DetailFilms {...{pathId}}/>}
    </>
  )

};

export default withRouter(DetailPage);