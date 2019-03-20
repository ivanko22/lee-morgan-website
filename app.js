var express = require("express");
var bodyParser = require("body-parser");

var app = express();
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(request, response){
    response.render("home.ejs");
});

app.get("/bio", function(request, response){
    response.render("bio.ejs");
});

app.listen(8080);