const { Schema, model, Types } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const FilmSchema = new Schema({
  name: { type: String },
  release: { type: String },
  format: { type: String },
  stars: [{ type: String}],
  // stars: [{ type: Types.Array, }]
});
FilmSchema.plugin(mongoosePaginate);
const Film = model('Film',  FilmSchema);
module.exports = Film

// module.exports = model("Film", FilmSchema);
