const mongoose = require('mongoose');
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  'mongodb+srv://llam722:codesmith123@cluster0.3ncbpil.mongodb.net/?retryWrites=true&w=majority';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

mongoose
  .connect(myURI)
  .then((response) => console.log('Connected to Mongo DB'))
  .catch((e) => console.log('Error: e', e));

const taskSchema = mongoose.Schema({
  item: { type: String, require: true },
  created_at: { type: Date, default: Date },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task }; // <-- export your model
