const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./db/connection');
const userRouter = require("./routes/User")
const app = express();
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.json({ limit: '10mb' })); 
connectToDatabase();
app.use("/user",userRouter);
app.listen(8800, () => {
  console.log('Server started on port 8800');
});