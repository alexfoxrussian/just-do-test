const express = require('express');
const path = require('path');
const requestLogger = require('./server/middlewares/request-logger.middleware');
const controllers = require('./server/controllers/index')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/just-do-test'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(controllers);

// app.get('/*', function (req, res) {
//
//   res.sendFile(path.join(__dirname, '/dist/just-do-test/index.html'));
// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening`);
});
