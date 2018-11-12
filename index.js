import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const todoRoutes = require('./routes/todos.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello from root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
