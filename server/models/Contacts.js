const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contactType: {
    type: String,
    required: true,
  },
  emails: [
    {
      email: String,
      id: String,
      isPrimary: Number,
      label: String,
      type: String,
    },
  ],
  firstName: String,
  id: String,
  imageAvailable: Boolean,
  lookupKey: String,
  name: String,
  phoneNumbers: [
    {
      id: String,
      isPrimary: Number,
      label: String,
      number: String,
      type: String,
    },
  ],
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
