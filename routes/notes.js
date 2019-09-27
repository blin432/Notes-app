var express = require('express');
var router = express.Router();


const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

/* GET notes listing. */


/* set up CRUD OPERATIONS AND ROUTES */


//retrieve the notes
router.get('/', function(req, res, next) {
  // res.send('respond with a notes resource');
  const n= db.get('posts')
  .map('title')
  .value()
   console.log(n);
   res.json(n);

});

//create the notes in at the resource
router.post('/add', function(req, res, next) {
  console.log(req.body);
  let notes = req.body.inputValue
  const post = _.insert(db.posts, { body: 'New post' })
  db.get('posts')
    .push({ id: 1, title: req.body.inputValue.inputValue})
    .write()
  
});

//edit notes at the resources
router.put('/edit', function(req, res, next) {
  db.get('posts')
  .find({ title: 'low!' })
  .assign({ title: 'hi!'})
  .write()
  res.send('respond with a notes resource');
});


//delete notes at the resource
router.delete('/delete', function(req, res, next) {

  db.get('posts')
  .remove({ title: 'low!' })
  .write()

  res.send('respond with a notes resource');
});

module.exports = router;
