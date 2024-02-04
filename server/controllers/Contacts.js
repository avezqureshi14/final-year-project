const Contact = require('../models/Contacts'); // Import the Contact model

const saveContacts = async (req, res) => {
  try {
    const contactsData = req.body; 
    const savedContacts = new Contact(contactsData);
    await savedContacts.save(); // Fix the variable name here
    res.status(201).json(savedContacts);
  } catch (error) {
    console.error('Error saving contacts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { saveContacts };
