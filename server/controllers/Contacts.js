const Contact = require('../models/Contacts'); // Import the Contact model

const saveContacts = async (req, res) => {
  try {
    const { name } = req.body; // Fix the variable name here
    const savedContact = new Contact({name});
    await savedContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error saving contacts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { saveContacts };
