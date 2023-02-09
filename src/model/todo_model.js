const mongoose = require('mongoose');

const TodoModel = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('Todo', TodoModel);
