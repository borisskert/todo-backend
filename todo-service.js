const filter = require('./object-utils');
const uuid = require('uuid/v4');

let todos = {
};

function addTodo(todo) {
    const id = uuid();
    todos = {
        ...todos,
        [id]: {
            ...todo,
            id,
        },
    };

    return id;
}

function getAllTodos() {
    return Object.keys(todos).map(key => todos[key]);
}

function getTodo(id) {
    return todos[id];
}

function updateTodo(id, todo) {
    todos = {
        ...todos,
        [id]: {
            ...todo,
            id
        },
    };
}

function deleteTodo(id) {
    todos = filter(todos, key => key !== id);
}

module.exports = {
    addTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
};
