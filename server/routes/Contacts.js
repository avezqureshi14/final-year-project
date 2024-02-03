const express = require("express");
const contactsRouter = express.Router();
const contactsController = require("../controllers/Contacts");

// Create a new blog
contactsRouter.post("/login", contactsController.saveContacts);
module.exports = contactsRouter;
