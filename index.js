const express = require('express');
const apiData = require('./data.json');

// Add middleware
const logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, API!');
});

app.get('/data', (req, res) => {
  res.json(apiData);
});

// Error handling middleware
if (app.get('env') === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send('Server Error');
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
