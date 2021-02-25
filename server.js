const { Router } = require('express');
const usersRepository = require('./server/repositories/users.repository');

const express = require('express');
const path = require('path');
const controllers = require('./server/controllers/users.controller')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/just-do-test'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(controllers);


const router = new Router();

router.get('/', async (_request, response) => {
  const users = await usersRepository.getAll();
  response.json(users);
});

// app.get('/*', function (req, res) {
//
//   res.sendFile(path.join(__dirname, '/dist/just-do-test/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(8080);
