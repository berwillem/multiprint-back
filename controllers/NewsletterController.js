const Newsletter = require("../models/Newsletter.js");
exports.createNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const newNewsletter = new Newsletter({
      email,
    });

    const savedNewsletter = await newNewsletter.save();
    res.status(201).json(savedNewsletter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create Newsletter" });
  }
};

exports.getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.status(200).json({ newsletters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch newsletters" });
  }
};

exports.getAllNewslettersCount = async (req, res) => {
  try {
    const totalCount = await Newsletter.countDocuments();
    res.status(200).json({ totalCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch newsletters count" });
  }
};

exports.deleteNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNewsletter = await Newsletter.findByIdAndDelete(id);
    if (!deletedNewsletter) {
      return res.status(404).json({ error: "Newsletter not found" });
    }
    res.status(200).json({ message: "Newsletter deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete newsletter" });
  }
};
