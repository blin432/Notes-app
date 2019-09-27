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
  let id = req.body.idNumber
  let notes = req.body.inputValue;
  db.get('posts')
    .push({id:id,title: notes})
    .write()
  
});

//edit notes at the resources
router.put('/edit/:id', function(req, res, next) {
  console.log(req.params)
  console.log(req.body)
  let editId= req.params.id
  console.log(editId)
  let editTitle= req.body.editValue
  console.log(editTitle)
  db.get(`posts[${editId}]`)
  .assign({ title: editTitle})
  .write()
});


//delete notes at the resource
router.delete('/delete/:id', function(req, res, next) {
  console.log("id")
  console.log(req.params.id)
  let idDelete= req.params.id
  const n=db.get(`posts[${idDelete}]`)
  .remove()
  .write()
  console.log(n);

  
});

module.exports = router;
