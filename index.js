import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const todoRoutes = require('./routes/todos.js');

app.get('/', (req, res) => {
  res.send('hello from root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
