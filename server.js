
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var exphbs = require("express-handlebars");
var routes = require("./routes/api-burger-routes.js");

var db = require("./models");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Set Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give server access to our routes
app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log("Welcome to Eat Da Burger Sequelize Application Server Side. Listening to PORT  " + PORT);
	});
});