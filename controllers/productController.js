const Product = require("../models/Product");
const { arrayify } = require("../utils/utils");

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const { category } = req.query; // Get category from query parameters

    let filter = {};
    if (category) {
      filter.category = category; // Filter by category if provided
    }

    const products = await Product.find(filter).populate("category"); // Populate category details if needed

    res.status(200).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// create a product
exports.createProduct = async (req, res) => {
  try {
    const { titlefr, titleen, titlear, descfr, descen, descar, category } =
      req.body;
    console.log(req.files);
    const images = arrayify(req.files).map((file) => file.filename);

    const urls = images.map((img) => {
      return `http://localhost:5000/images/${img}`;
    });
    const product = new Product({
      titlefr,
      titleen,
      titlear,
      descfr,
      descen,
      descar,
      images: urls,
      category,
    });
    await product.save();
    res.status(200).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update a product
exports.updateProduct = async (req, res) => {
  try {
    const {
      titlefr,
      titleen,
      titlear,
      descfr,
      descen,
      descar,
      images,
      category,
    } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    product.titlefr = titlefr;
    product.titleen = titleen;
    product.titlear = titlear;
    product.descfr = descfr;
    product.descen = descen;
    product.descar = descar;
    product.images = images;
    product.category = category;
    await product.save();
    res.status(200).json({
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    await product.deleteOne();
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
