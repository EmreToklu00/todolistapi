const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const apiRouter = require("./src/api/routes/todo_router")
require('dotenv').config({ path: './src/config/.env' });


connectDB();
app.use(bodyParser.json());
app.use("", apiRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running! => ${process.env.PORT}`);
});
