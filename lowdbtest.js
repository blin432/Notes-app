
//lowdb required
//testing lowdb
const low = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write()

  // Add a post
// db.get('posts')
// .push({ id: 1, title: 'lowdb is awesome'})
// .write()

// Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
// .write()

// // Increment count
// db.update('count', n => n + 1)
// .write()






db._.mixin(lodashId)

// We need to set some default values, if the collection does not exist yet
// We also can store our collection
let one= 1;
let two = 1;
const n=db.get('posts')
.splice(5,1)
.write()
  console.log(n);

