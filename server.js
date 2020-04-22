const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { User } = db.models;
const port = process.env.PORT || 3000;

app.use('./dist', express.static(path.join(__dirname, 'dist'))); //important. connects to main.js in index.html
app.use(express.json()); //important!

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res, next)=>{
  User.findAll()
    .then(item => res.send(item))
    .catch(next)
});

// app.get('/api/users', async(req, res, next)=> {
//   try {
//     const allUsers = await User.findAll();
//     res.send(allUsers);
//   }
//   catch(ex){
//     next(ex);
//   }
// });

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(500).send({message: err.message});
});

db.syncAndSeed()
  .then(()=> {
    app.listen(port, console.log(`listening on port ${port}`))
  });
