const express = require("express");

const Topics = require("./models/topicModel");

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

app.get("/jeopardy", async function(request, response){
    const count = await Topics.countDocuments();
    const topicArr = await Promise.all([...new Array(6)].map(() => {
        const rand = Math.floor(Math.random() * Math.floor(count));
        return Topics.findOne().skip(rand).exec();
    }));

    response.render("jeopardy.ejs", {topics: topicArr});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Running on port " + port);
});