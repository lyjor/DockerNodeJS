// app.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World - Curso Porto');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});