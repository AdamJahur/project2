// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//

// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var exphbs = require('express-handlebars');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");


//handlebars link
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));


// Routes =============================================================

//Files not implemented yet commenting routes for now

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================

require("./routes/html-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
