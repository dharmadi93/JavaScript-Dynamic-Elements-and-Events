const Todo = require('../models/models.todo')

module.exports = {
    getTodos: (req, res) => {
        Todo.find((err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getTodoById: (req, res) => {
        Todo.findOne({
            _id: req.params.todoId
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    createDoto: (req, res) => {
        const todo = {
            title: req.body.title,
            status: false
        }

        Todo.create(todo, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteTodo: (req, res) => {
        Todo.findOneAndRemove({
            _id: req.params.todoId
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    updateTodo: (req, res) => {
        Todo.findOneAndUpdate({
            _id: req.params.todoId
        }, {
            title: req.body.title
        }, {
            new: true,
            upsert: false
        }, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    updateTodoStatus: (req, res) => {

    }
}