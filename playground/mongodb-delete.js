//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp')

// Delete multiple files at once.

// db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) =>{
//   console.log(result);
// });

// Delete a single file

// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
//   console.log(result);
// });

// Delete a targeted file.

// db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) =>{
//   console.log(result);
// });

// Challange problems

db.collection('User').deleteMany({name: 'Cameron'});

db.collection('Users').findOneAndDelete({name: "Stef"});



  client.close();
});
