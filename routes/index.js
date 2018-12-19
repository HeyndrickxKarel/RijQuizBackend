let mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

let Question = mongoose.model("Question");
let Settings = mongoose.model("Settings");

/* GET questions . */
router.get('/API/questions/', function(req, res, next) {
  Question.find(function(err, questions){
    if (err){
      return next(err);
    }
    return res.json(questions);
  });
});

router.get("/API/settings/", function (req, res, next) {
  let query = Settings.findOne({});
  query.exec(function (err, settings) {  
    if (err || settings.length == 0)
      return next(new Error("Settings were not found"));
    res.json(settings);

  })
});

module.exports = router;
