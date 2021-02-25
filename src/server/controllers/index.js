const { Router } = require('express');
const usersController = require('./users.controller');

const router = new Router();

router.use("/api/users", usersController);

router.get('/*', (_request, response) => {
  console.log(response);
});
module.exports = router;
