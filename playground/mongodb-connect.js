//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Willie', age: 24};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: true
  }, (err, result) =>{
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({ // Indicates what collection to add to.
    name: 'Willie', // Object parrameters.
    age: 24,
    location: 'Villanova'
  }, (err, result) =>{ // Error handeling
    if (err){
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp()); // Validation that it went through.
  });

  client.close();
});
