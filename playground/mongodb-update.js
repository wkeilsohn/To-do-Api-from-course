//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c360dc334ad829528a9bb53')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c360b8b98f3f33674d4b81e')
}, {
  $set: {
    name: 'Torry'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) =>{
  console.log(result);
});


  client.close();
});
