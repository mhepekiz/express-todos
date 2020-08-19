var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

 // around line 8
//  const Todo = require('../models/todo');

//  router.get('/', function(req, res, next) {
//   res.render('todos/index', {
//     todos: Todo.getAll()
//   });
// });


router.get('/', todosCtrl.index);

 router.get('/', todosCtrl.index);
 router.get('/:id', todosCtrl.show);

module.exports = router;
