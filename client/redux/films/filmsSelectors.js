import {findFilmsByTitle} from "../../helpers/findFilmsByTitle";

export const getAllFilms = state => state.films.items;

export const getLoading = state => state.films.loading;

export const onSearchtitle = state => state.films.search.searchValue;

export const getSortMethod = state => state.films.search.sortMethod;

export const getSearchFilms = (state) => {
  const items = getAllFilms(state);
  const value = onSearchtitle(state);
  return findFilmsByTitle(items, value);
};