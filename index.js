import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello from express!');
});

app.get('/happy', (req, res) => {
  res.send('😁');
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
