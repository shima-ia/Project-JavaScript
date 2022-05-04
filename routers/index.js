const express = require('express');
const route = express.Router();
const member = require('./member');
const petition = require('./petition');

route.use('/member', member);
route.use('/petition', petition);

module.exports = route;