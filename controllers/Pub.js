const Pub = require("../models/Pub");

// get all pubs
exports.getAllPubs = async (req, res) => {
  try {
    const pubs = await Pub.find();
    res.status(200).json({
      pubs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// create a pub
exports.createPub = async (req, res) => {
  try {
    const {
      titlefr,
      titleen,
      titlear,
      descriptionfr,
      descriptionen,
      descriptionar,

      color,
    } = req.body;
    console.log(req.file);
    const image = req.file.filename;

    const pub = new Pub({
      titlefr,
      titleen,
      titlear,
      descriptionfr,
      descriptionen,
      descriptionar,
      image: `http://localhost:5000/images/${image}`,
      color,
    });
    await pub.save();
    res.status(200).json({
      message: "Pub created successfully",
      pub,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update a pub
exports.updatePub = async (req, res) => {
  try {
    const { titlefr, titleen, titlear, descfr, descen, descar } = req.body;
    const pub = await Pub.findById(req.params.id);
    if (!pub) {
      return res.status(404).json({
        message: "Pub not found",
      });
    }
    pub.titlefr = titlefr;
    pub.titleen = titleen;
    pub.titlear = titlear;
    pub.descfr = descfr;
    pub.descen = descen;
    pub.descar = descar;
    await pub.save();
    res.status(200).json({
      message: "Pub updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// delete a pub
exports.deletePub = async (req, res) => {
  try {
    const pub = await Pub.findById(req.params.id);
    if (!pub) {
      return res.status(404).json({
        message: "Pub not found",
      });
    }
    await pub.remove();
    res.status(200).json({
      message: "Pub deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get pub by id
exports.getPubById = async (req, res) => {
  try {
    const pub = await Pub.findById(req.params.id);
    if (!pub) {
      return res.status(404).json({
        message: "Pub not found",
      });
    }
    res.status(200).json({
      pub,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
