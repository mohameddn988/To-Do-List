import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];

//get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

//post a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: uuidv4(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

//update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = req.body.completed;
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

//delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})