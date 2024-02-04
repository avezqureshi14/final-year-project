const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName:{
    type:String,
  },
  lastName:{
    type:String,
  },
  phoneNumber:{
    type:String,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
