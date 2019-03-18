var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.render("home.ejs");
});

app.listen(8080);