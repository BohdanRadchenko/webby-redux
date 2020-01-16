const { Schema, model, Types } = require("mongoose");

const FilmSchema = new Schema({
  name: { type: String },
  release: { type: String },
  format: { type: String },
  stars: [{ type: String}],
  // stars: [{ type: Types.Array, }]

});

module.exports = model("Film", FilmSchema);
