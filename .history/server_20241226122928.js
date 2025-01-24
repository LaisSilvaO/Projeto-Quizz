const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Criando a conexão com o banco de dados
const meubanco = mysql.createConnection({
  host: 'localhost',
  user: 'root', // seu usuário do MySQL
  password: 'meuquiz', // sua senha do MySQL
  database: 'quiz_db',
});

meubanco.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para obter as perguntas e respostas
app.get('/questions', (req, res) => {
  const query = `
    SELECT q.id_question, q.question_text, a.id_answer, a.answer_text
    FROM questions q
    JOIN answers a ON q.id_question = a.id_question
    ORDER BY q.id_question, a.id_answer
  `;
  
  meubanco.query(query, (err, results) => {
    if (err) throw err;
    res.json(results); // Retorna os dados em formato JSON
  });
});

// Servindo os arquivos estáticos (HTML, JS, CSS)
app.use(express.static('telas'));

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
