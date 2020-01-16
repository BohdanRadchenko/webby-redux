export const findFilmsByTitle = (array, value) => {
  if(!value) {
    return array
  };

  if(value) {
  return array.filter(el =>
    el.name.toLowerCase().includes(value.toLowerCase()) ||  el.stars.includes(value.toLowerCase())
  )}

  return array
};