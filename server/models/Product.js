const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  imgUrl: { type: String, require: true },
  name: { type: String, require: true },
  count: { type: Number, require: true },
  size: {
    width: { type: Number, require: true },
    height: { type: Number, require: true },
  },
  weight: { type: String, require: true },
  comments: [{ type: String, ref: "Comment" }],
});

module.exports = model("Product", ProductSchema);
