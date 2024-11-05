const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const conexao = require('./mulheresconectadas'); // Arquivo conexaobanco.js

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Configurando o diretório de visualizações

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
  res.render('cadastroleitura', { titulo: 'Dados' });
});


// Rota de cadastro (POST)
app.post('/cadastroleitura', function(req, res) {
 
  const nome= req.body.nome;
  const sobrenome =req.body.sobrenome;
  const email = req.body.email;
  const paragrafo = req.body.paragrafo;
  
  const sql = 'INSERT INTO pesquisadores (nome, sobrenome, email, paragrafo) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, sobrenome, email, paragrafo], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao cadastrar usuário.');
      return;
    }
    res.send('Usuário cadastrado com sucesso!');
  });
});

app.get('/cadastroleitura', function(req, res) {
  const sql = "SELECT * FROM pesquisadores";
  conexao.query(sql, function(error, result) {
    if (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).send('Erro ao buscar dados.');
      return;
    }
    res.render('cadastroleitura', { pesquisadores: result });
  });
});

// Iniciar o servidor       
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
