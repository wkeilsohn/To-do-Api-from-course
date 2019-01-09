//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp')

/// Search via a given parameter.
  // db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

/// Count objects
  db.collection('Users').find({name: 'Willie'}).count().then((count) =>{
    console.log(`Todos counts: ${count}`);
//    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });

  client.close();
});
