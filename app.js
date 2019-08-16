// Require all necessary files
const express = require("express")
app = express()
Coniguration = require('./appconfig.js')
require('dotenv').config()
app.set('x-powered-by', false);

// api routes
let apiroutes = require("./api/routes");

Coniguration.ConfigApp(app)

// API Route Setup
app.use('/api', apiroutes);

// declaring ports
let port = process.env.PORT;

// listening to port and logging
app.listen(port);
console.log("Application is running on " + port);

module.exports = app;