const { Router } = require('express');
const usersController = require('./users.controller');

const router = new Router();

router.use('/api/users', usersController);

module.exports = router;
