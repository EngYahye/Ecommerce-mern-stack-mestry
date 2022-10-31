import  Express  from 'express';
import data from './data.js';

const app = new Express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
