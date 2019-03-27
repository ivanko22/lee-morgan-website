var mongo = require("mongoose");
var db = mongo.createConnection(process.env.JEOPARDY_DB, {useNewUrlParser:true});

var topicSchema = new mongo.Schema({
    title: String,
    approved: Boolean,
    questions: [{
        question: String,
        answer: String
    },
    {
        question: String,
        answer: String
    },
    {
        question: String,
        answer: String
    },
    {
        question: String,
        answer: String
    },
    {
        question: String,
        answer: String
    }]
});

var Topic = db.model("topic", topicSchema);

module.exports = Topic;