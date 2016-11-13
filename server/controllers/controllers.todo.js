const Todo = require('../models/models.todo')

module.exports = {
    getTodos: (req, res) => {

    },

    getTodoById: (req, res) => {

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

    },

    updateTodo: (req, res) => {

    },

    updateTodoStatus: (req, res) => {

    }
}