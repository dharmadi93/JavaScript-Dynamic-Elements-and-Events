var express = require('express');
var router = express.Router();
const controllerTodo = require('../controllers/controllers.todo')


router.get('/', controllerTodo.getTodos)
router.get('/:todoId', controllerTodo.getTodoById)
router.post('/', controllerTodo.createDoto)
router.delete('/:todoId', controllerTodo.deleteTodo)


module.exports = router;
