const Todo = require('../models/todo');


module.exports = {
    index,
    show
}

//Reading all the data the one of the R's in cRud
function index(req,res){
    res.render('todos/index', {
      todos: Todo.getAll()
    });
}

function show(req, res) {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id), todoNum: req.params.id
    });
  }



