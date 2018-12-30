# Backend RijQuiz

This repository contains the methods and models to receive the data from the RijQuiz application. That way data can be received from

- Questions 
- App settings

This backend is made with Express since this is a lightweight backend technology. This way mistakes in the code can also easily be found. It runs on [heroku](https://www.heroku.com/). 

The database of RijQuiz is a MongoDB database because this closely matches the json requirements and is hosted on [mlab](https://mlab.com/).

## Project hierarchy

When navigation from the main folder, the following organisation is made 

| Map    | Functionaliteit                                              |
| ------ | :----------------------------------------------------------- |
| Models | This folder contains all the mongoose models used for loading the data concerning the questions and app settings. |
| Routes | In this folder are all the files that have the API routes defined. The routes currently used in the app are in the file `index.js`. |

## The requests

In the RijQuiz app there are currently 2 API calls needed. Whenever the user opens the RijQuiz app, the app checks whether the saved version number of the questionlist matches with the version number on the server. If it is not, the app will download all the new questions. This is because it's important the RijQuiz questions are up to date with the driving regulations in Belgium. 

**The API calls:**

1. The API call that receives an appsettings object including the version number of the question list. 

```javascript
/* GET settings . */
router.get("/API/settings/", function (req, res, next) {
  let query = Settings.findOne({});
  query.exec(function (err, settings) {  
    if (err || settings.length == 0)
      return next(new Error("Settings were not found"));
    res.json(settings);

  })
});
```

2. The API call that receives all the existing questions on the server.

```javascript
/* GET questions . */
router.get('/API/questions/', function(req, res, next) {
  Question.find(function(err, questions){
    if (err){
      return next(err);
    }
    return res.json(questions);
  });
```



## Author & license

This project belongs to Karel Heyndrickx - 3rd year student Applied Informatics - Programming at Hogeschool Gent