export const searchFilmsByForm = (array, form) => {
  const valueTitle = form.name;
  const valueStars = form.stars;

  if (valueTitle) {
    return array.filter(el =>
      el.name.toLowerCase().trim().includes(valueTitle.toLowerCase().trim()))
  }
  ;

  if (!valueTitle && valueStars) {
    return array.filter(el => el.stars.toString().toLowerCase().includes(valueStars.toLowerCase().trim()))
  }
  return array
}