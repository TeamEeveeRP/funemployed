const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const apiRouter = require('./routes/api');
// const loginRouter = require('./routes/login');
// const signupRouter = require('./routes/signup');

const PORT = 3000;
/**
 * handler for parsing of request, body, and cookies ? <------
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * handler for static data
 */
app.use(express.static(__dirname + '/public'));

/**
 * Routes to our defined endpoints
 */
app.use('/api', apiRouter);

/**
 * ? Route for Root endpoint
 */
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('../public/index.html'));
// });

/**
 * Error handler for non-existent endpoints
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global Error handler
 */
app.use((err, req, res, next) => res.status(500).json(err));

/**
 * listen to PORT
 */
app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));

module.exports = app;
