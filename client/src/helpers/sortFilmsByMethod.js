export const sortFilmsByMethod = (arr, method) => {
  if (!!arr.length) {
    if (method === 'title') {
      arr.sort((a, b) => a.name && b.name ? a.name.localeCompare(b.name) : null);
      return arr
    }
    if (method === 'release') {
      arr.sort((a, b) => a.name && b.name ? b.release.localeCompare(a.release) : null)
      return arr
    }
    return arr
  }
  return arr
};



