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
server.use(jsonServer.rewriter({'/api/*': '/$1'}));
server.use(router);

server.listen(process.env.PORT || 3000);
app.use(server);

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/just-do-tes/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
