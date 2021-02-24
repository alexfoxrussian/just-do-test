const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/mocks/users.mock.json');
const middlewares = jsonServer.defaults();


const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/just-do-test'));

server.use(middlewares);
server.use('/api',router);
server.use(router);

server.listen(process.env.PORT || 8081, () => {
  console.log('Json server is running');
});

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/just-do-test/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
