const General = require("../models/General");

const setEmail = async (req, res) => {
  try {
    const { email } = req.body;
    await General.findOneAndUpdate({}, { email }, { upsert: true, new: true });
    res.status(200).json({ message: "Email updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getEmail = async (req, res) => {
  try {
    const general = await General.findOne({});
    if (!general) {
      return res.status(404).json({ message: "Email not found" });
    }
    res.status(200).json({ email: general.email });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { setEmail, getEmail };