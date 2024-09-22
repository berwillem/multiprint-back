const Contact = require("../models/Contact");

// create a contact
exports.createContact = async (req, res) => {
  try {
    const { firstname, name, email, phone, message } = req.body;
    const contact = new Contact({
      firstname,
      name,
      email,
      phone,
      message,
    });
    await contact.save();
    res.status(200).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    await contact.remove();
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
