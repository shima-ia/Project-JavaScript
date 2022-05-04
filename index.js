const express = require('express');
const route = require('./routers');
const app = express();
const cors = require('cors')
const path = require('path')
const sessions = require('express-session');
const bodyparse = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose')

const port = process.env.APP_PORT || 5000;

// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
mongoose.connect(`mongodb://localhost:27017/admin`, {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('database connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('database disconnected');
});

app.use(cors())
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));

app.use(sessions({
    secret: "asdasdzxcsgertqwrte",
    saveUninitialized: true,
    resave: false
}));


app.use('/api', route);
app.use('/', express.static(path.join(__dirname, 'www')))

app.listen(port, () => {
    console.log("Start on port " + port);
});