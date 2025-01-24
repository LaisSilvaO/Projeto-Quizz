CREATE DATABASE quiz_db;

USE quiz_db;

-- Tabela de Categorias
CREATE TABLE categories (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Tabela de Perguntas
CREATE TABLE questions (
    id_question INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL,
    correct_answer_id INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id_category)
);

-- Tabela de Respostas
CREATE TABLE answers (
    id_answer INT AUTO_INCREMENT PRIMARY KEY,
    id_question INT,
    answer_text TEXT NOT NULL,
    FOREIGN KEY (id_question) REFERENCES questions(id_question)
);






-- Inserindo Categorias
INSERT INTO categories (category_name) VALUES ('Geografia');
INSERT INTO categories (category_name) VALUES ('Química');

-- Inserindo Perguntas
INSERT INTO questions (question_text, correct_answer_id, category_id) 
VALUES ('Qual é a capital do Brasil?', 2, 1);  -- A resposta correta é a número 2 (Brasília)

INSERT INTO questions (question_text, correct_answer_id, category_id) 
VALUES ('Qual a fórmula da água?', 1, 2);  -- A resposta correta é a número 1 (H2O)

-- Inserindo Respostas
-- Respostas para "Qual é a capital do Brasil?"
INSERT INTO answers (id_question, answer_text) VALUES (1, 'Brasília');
INSERT INTO answers (id_question, answer_text) VALUES (1, 'Rio de Janeiro');
INSERT INTO answers (id_question, answer_text) VALUES (1, 'São Paulo');

-- Respostas para "Qual a fórmula da água?"
INSERT INTO answers (id_question, answer_text) VALUES (2, 'H2O');
INSERT INTO answers (id_question, answer_text) VALUES (2, 'O2');
INSERT INTO answers (id_question, answer_text) VALUES (2, 'CO2');
