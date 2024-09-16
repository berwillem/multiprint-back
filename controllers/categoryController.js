const Category = require("../models/Category");

// get all categories

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// create a category
exports.createCategory = async (req, res) => {
  try {
    const { titlefr, titleen, titlear } = req.body;
    const category = new Category({ titlefr, titleen, titlear });
    await category.save();
    res.status(200).json({
      message: "Category created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//   update a category
exports.updateCategory = async (req, res) => {
  try {
    const { titlefr, titleen, titlear } = req.body;
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    category.titlefr = titlefr;
    category.titleen = titleen;
    category.titlear = titlear;
    await category.save();
    res.status(200).json({
      message: "Category updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    await category.remove();
    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
