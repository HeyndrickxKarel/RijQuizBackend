var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    text: String,
    answers: [String],
    rightAnswer: String
})

mongoose.model('Question',QuestionSchema);