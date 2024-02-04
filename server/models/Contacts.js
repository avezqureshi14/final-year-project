const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contacts: [
    {
      type: String,
    },
  ],
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
