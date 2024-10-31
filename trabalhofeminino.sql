-- Criação do banco de dados
CREATE DATABASE trabalhofeminino;


-- Criação da tabela `pesquisadores`
CREATE TABLE pesquisadores (
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR (80 )PRIMARY KEY,
  paragrafo VARCHAR(800) NOT NULL,
  creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



