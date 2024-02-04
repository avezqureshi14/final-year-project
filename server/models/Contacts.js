const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contacts: [
    {
      type: Object, 
    },
  ],
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
