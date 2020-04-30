const express = require('express');
const app = express();
const db = require('./db/db');
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || 3000;

// Middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/', routes);
app.use(express.json());
// app.use(require('express-session')({
//   secret: process.env.SECRET
// }));

// Serves up the html page to start our frontend
app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next)=>{
  console.log(err);
  res.status(500).send({message: err.message});
})

db.sync()
  .then(()=> {
    app.listen(port, console.log(`you are listening on port ${port}`))
  })
