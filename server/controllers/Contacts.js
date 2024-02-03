const Contact = require('../models/Contacts'); // Import the Contact model

const saveContacts = async (req, res) => {
  try {
    const contactsData = req.body; // Assuming the request body contains an array of contacts

    // Validate the data or perform any other necessary checks

    // Save each contact to the database
    const savedContacts = await Contact.create(contactsData);

    res.status(201).json(savedContacts);
  } catch (error) {
    console.error('Error saving contacts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { saveContacts };
