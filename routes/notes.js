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
   res.json(n);

});

//create the notes in at the resource
router.post('/add', function(req, res, next) {
  let id = req.body.idNumber
  let notes = req.body.inputValue;
  db.get('posts')
    .push({id:id,title: notes})
    .write()
  
});

//edit notes at the resources
router.put('/edit/:id', function(req, res, next) {
  let editId= req.params.id
  let editTitle= req.body.editValue
  db.get(`posts[${editId}]`)
  .assign({ title: editTitle})
  .write()
});


//delete notes at the resource
router.delete('/delete/:id', function(req, res, next) {
  console.log(req.params);
  db.get('posts')
  .splice(req.params.id,1) // lowdb splice function require (indexof array, number of elements to slice)
  .write()
});

module.exports = router;
