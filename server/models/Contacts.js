const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  birthday: Date,
  emails: [
    {
      label: String,
      email: String,
    },
  ],
  firstName: String,
  lastName: String,
  phoneNumbers: [
    {
      label: String,
      number: String,
    },
  ],
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
