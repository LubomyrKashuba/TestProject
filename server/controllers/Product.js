const ProductSchema = require("../models/Product");

const ProductController = {
  getProducts: async (req, res) => {
    try {
      const query = req.query
      const products = await ProductSchema.find().sort({[query.sort]: 1, count: 1}).exec();

      res.status(200).json(products);
    } catch (error) {
      console.log(error);

      res.status(404).json({ message: "something went wrong" });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, height, width, count, weight, imgUrl } = req.body;
      const newProduct = await ProductSchema.create({
        name,
        size: { height, width },
        count,
        weight,
        imgUrl,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);

      res.status(404).json({ message: "something went wrong" });
    }
  },
  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, height, width, count, weight, imgUrl } = req.body;

      const newProduct = await ProductSchema.findByIdAndUpdate(
        id.slice(1),
        {
          name,
          size: { height, width },
          count,
          weight,
          imgUrl,
        },
        { new: true }
      ).exec();

      res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);

      res.status(404).json({ message: "something went wrong" });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      await ProductSchema.findByIdAndRemove(id.slice(1)).exec();

      res.status(204).end();
    } catch (error) {
      console.log(error);

      res.status(404).json({ message: "something went wrong" });
    }
  },
};

module.exports = ProductController;
