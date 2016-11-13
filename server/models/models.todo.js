const mongoose = require('mongoose')
var Schema = mongoose.Schema

const Todo = Schema({
    title: {
        type: String,
        required: true
    },
    status: Boolean
})

module.exports = mongoose.model('Todo', Todo)