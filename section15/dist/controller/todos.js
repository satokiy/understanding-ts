"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
// post
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "todo has created", createTodo: newTodo });
};
exports.createTodo = createTodo;
// get
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
// patch
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("cant find todo");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
    res
        .status(201)
        .json({ message: "update todo", updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
// delete
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("cant find todo");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "delete todo" });
};
exports.deleteTodo = deleteTodo;
