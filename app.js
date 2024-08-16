require('dotenv').config();
const os = require('os');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

// Configurar a conexão ao banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/', (req, res) => {
  const containerName = os.hostname();
  const dbName = process.env.DB_NAME;
  result = db.query('select user from user', (err, rows) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return;
    }
    console.log('Consulta retornou:', rows);
  });
  print(result);
  res.send(`Hello World - Curso Porto NodeJS.   -   Nome do contêiner: ${containerName} - DB Name: ${dbName}`);
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});