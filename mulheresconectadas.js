//importando o módulo mysql
const mysql = require('mysql');

//variável que armazena a conecxão
const mulheresconectadas = mysql.createConnection({
  host: 'localhost', //Define o endereço do servidor MySQL
  user: 'root', //  Nome de usuário para autenticação no banco de dados.
  password: '', // Senha correspondente ao usuário do MySQL
  database: 'trabalhofeminino'
});

mulheresconectadas.connect((err) => {  /* inicia a conexão com o banco de dados*/
//Verifica se ocorreu algum erro durante a tentativa de conexão. A variável err conterá informações sobre o erro, se houver.
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados.');
});

// exporta a conexão do banco de dados para ser utilizada em outros arquivos do projeto.
module.exports = mulheresconectadas;