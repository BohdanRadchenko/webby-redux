import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import DetailPage from "./pages/DetailPage";
import FilmsPage from "./pages/FilmsPage";
import AddPage from "./pages/AddPage";
import UploadPage from "./pages/UploadPage";
import SearchPage from "./pages/SearchPage";
import StatisticsPage from "./pages/StatisticsPage";
import 'materialize-css'

export const useRoutes = () => {
  return (
    <div>
      <Switch>

        <Route path="/films/page=:page" >
          <FilmsPage/>
        </Route>
        <Route path="/film/:id">
          <DetailPage/>
        </Route>
        <Route path="/create" >
          <AddPage />
        </Route>
        <Route path="/search" >
          <SearchPage />
        </Route>
        <Route path="/upload" >
          <UploadPage/>
        </Route>
        <Route path="/statistics" >
          <StatisticsPage />
        </Route>
        <Redirect to="/films/page=1"/>
      </Switch>
    </div>
  )
};