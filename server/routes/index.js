var express = require('express');
var router = express.Router();
const controllerTodo = require('../controllers/controllers.todo')

router.post('/', controllerTodo.createDoto)


module.exports = router;
