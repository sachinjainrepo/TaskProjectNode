const express = require('express');
const tasks = require('./readjson');
const validateTask = require('./validation');

var deleteTask=tasks;
//declare
const app = express();
app.use(express.json());
//Get all tasks
app.get('/tasks', (req, res) => {
    res.send(tasks);
});

//sorting based on completed
app.get('/tasks/completed', (req, res) => {
    const completedTasks = tasks.filter(task => task.completed);
    res.send(completedTasks);
});

//Get all tasks by id   
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
   
    if (!task) {
        return res.status(404).send('Task not found');
    }   
    res.send(task);
});

app.post('/tasks', validateTask, (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.send(tasks);
});

app.put('/tasks/:id', validateTask, (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).send('Task not found');
    }
    task.title = req.body.title;
    task.description = req.body.description;
    res.send(task);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = deleteTask.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).send('Task not found');
    }
    deleteTask = deleteTask.filter(task => task.id !== taskId);
    res.send(deleteTask);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});