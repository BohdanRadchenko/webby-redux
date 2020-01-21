import {findFilmsByTitle} from "../../helpers/findFilmsByTitle";

export const getAllItems = state => state.films.allItems;

export const getPaginationPage = state => state.films.pagination.paginationPage;

export const getPaginationCount = state => state.films.pagination.paginationCount;

export const getAllFilms = state => state.films.items;

export const getLoading = state => state.films.loading;

export const getSearchTitle = state => state.films.search.searchValue;

export const getSortMethod = state => state.films.search.sortMethod;

export const getAdvancedSearch = state => state.films.search.advancedSearch

export const getSearchFilms = (state) => {
  const items = getAllFilms(state);
  const value = getSearchTitle(state);
  return findFilmsByTitle(items, value);
};
