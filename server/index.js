const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const getRepos = require('../helpers/github.js')
const db = require ('../database/index.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
 
  getRepos.getReposByUsername(req.body.term, function(data) {
  	var storage = []
  	
  	JSON.parse(data).forEach(element => {
  	  var test = {};
      test['id'] = element.id
      test['user'] = element.owner.login
      test['repo_name'] =  element.name
      test['url'] = element.html_url
      storage.push(test);
  	})

  	console.log('storage', storage)
  });
  
  res.sendStatus(201);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

