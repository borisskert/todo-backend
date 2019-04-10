const express = require('express');
const todoService = require('./todo-service');

const app = express();

app.get('/todo', function (req, res) {
    res.json(todoService.getAllTodos());
});

app.listen(3000);
