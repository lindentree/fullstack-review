const request = require('request');
const config = require('../config.js');

let getReposByUsername = (url) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  const githubUrl = 'https://github.com/'
  const fullURL = githubUrl + url;

  let options = {
    url: null,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  options.url = fullURL;
  
  return request.get(options);
}

module.exports.getReposByUsername = getReposByUsername;