const request = require('request');
const config = require('../config.js');

let getReposByUsername = (url, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  const githubUrl = 'https://api.github.com/users/'
  const fullURL = githubUrl + url + '/repos';
  var testObj = [];
  let options = {
    url: null,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

 options.url = fullURL;
 
 request.get(options, function(error, response, body){
    callback(body);
     
  });
  

  
}

module.exports.getReposByUsername = getReposByUsername;