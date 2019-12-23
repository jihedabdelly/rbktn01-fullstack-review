const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//the nested schema inside repoSchema
let ownerSchema = mongoose.Schema({
  url: String,
  id: Number
})

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  owner : { type: Schema.ObjectId, ref: 'ownerSchema'}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, user) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if(err) throw new Error("Error !!!");

}

module.exports.save = save;