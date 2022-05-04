const express = require('express');
const { login, register,edit } = require('../controllers/member');
const route = express.Router();

route.post('/login', login)
route.patch('/:id', edit);
route.post('/register', register);

module.exports = route;