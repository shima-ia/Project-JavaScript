const express = require('express');
const { get, add } = require('../controllers/petition');
const route = express.Router();

route.get('/', get)
route.post('/', add);

module.exports = route;