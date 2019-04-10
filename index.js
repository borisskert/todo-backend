const express = require('express');
const bodyParser = require('body-parser');
const todoService = require('./todo-service');

const app = express();
app.use(bodyParser.json());

app.get('/todo', function (req, res) {
    const allTodos = todoService.getAllTodos();
    res.json(allTodos);
});

app.get('/todo/:id', function (req, res) {
    const todo = todoService.getTodo(req.params.id);
    res.json(todo);
});

app.post('/todo', function (req, res) {
    const id = todoService.addTodo(req.body);
    res.json(id);
});

app.put('/todo/:id', function (req, res) {
    todoService.updateTodo(req.params.id, req.body);
    res.json();
});

app.delete('/todo/:id', function (req, res) {
    todoService.deleteTodo(req.params.id);
    res.json();
});

app.listen(3000);
