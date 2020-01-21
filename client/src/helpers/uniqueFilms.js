export const uniqueFilms = (film, arr) => {
  let unique = true;
  if(film && arr.length !== 0) {
  const nameUniq = arr.filter(el => {
    return el.name.trim().toLowerCase() === film.name.trim().toLowerCase()
  }).filter(el => el.release.trim() === film.release.trim());
    return unique = nameUniq.length === 0
  }

  return unique;
};