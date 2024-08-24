const os = require('os');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const containerName = os.hostname();
  res.send(`Hello World - Curso Porto NodeJS.   -   Nome do contêiner: ${containerName} - DB Name: ${dbName}`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});