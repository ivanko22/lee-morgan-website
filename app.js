var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response){
    response.render("home.ejs");
});

app.get("/bio", function(request, response){
    response.render("bio.ejs");
});

app.get("/resume", function(request, response){
    response.render("resume.ejs");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("app running");
});