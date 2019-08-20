// Require all necessary files
require('dotenv').config()
const express = require("express"),
app = express(),
Coniguration = require('./appconfig.js'),
rateLimit = require("express-rate-limit")
ErrMsg = require("./api/utils/errmsg.js")
helmet = require('helmet')

// Security Module
app.use(helmet())

// api routes
let apiroutes = require("./api/routes");

Coniguration.ConfigApp(app)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: ErrMsg.MaxRequestsExceeds
});

app.use(limiter);

// API Route Setup
app.use('/api', apiroutes);

// declaring ports
let port = process.env.PORT;

// listening to port and logging
app.listen(port);
console.log("Application is running on " + port);

module.exports = app;