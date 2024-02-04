const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./db/connection');
const userRouter = require("./routes/User");
const contactsRouter = require('./routes/Contacts');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '100kb'})); 
connectToDatabase();
app.use("/user",userRouter);
app.use("/contacts",contactsRouter);
app.listen(8800, () => {
  console.log('Server started on port 8800');
});