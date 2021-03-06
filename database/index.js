const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var database = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log(`We're connected!`)
// });


let repoSchema = mongoose.Schema({
  // TODO: your schema here
  id: { type : Number, unique : true, required : true, dropDups: true },
  user: String,
  repo_name: String,
  url: String,
  date_created: String
});

let Repo = mongoose.model('Repo', repoSchema);

let retrieve = (callback) => {
  Repo.find({}, function(err, repos) {
  if (err) throw err;
    
    callback(repos)
  });
  
}

let save = (newRepoSchema) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var savedRepo = new Repo(newRepoSchema);

  savedRepo.save(function (err) {
    if (err) return handleError(err);
  // saved!
  });

}

module.exports.save = save;
module.exports.retrieve = retrieve;