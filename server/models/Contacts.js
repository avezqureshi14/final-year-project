const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contacts: [
      {
        type: Object, // Assuming you want to store the entire contact object
      },
    ],
  });
  

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
