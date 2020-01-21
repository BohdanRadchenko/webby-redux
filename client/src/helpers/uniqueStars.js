export const uniqueStars  = arr => {
  if(arr) {
  const spl = arr.split(',').map(el => el.trim())
  const st = Array.from(new Set(spl));
  return spl.length === st.length
  }
};


