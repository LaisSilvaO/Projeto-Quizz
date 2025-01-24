import {db} from "../Projeto-Quiz/meujava.js";
import {get, ref} from "firebase/database";

try{
  const bdref =(bd,/pong);
  const snapshot =await get(bdref);
  if (!snapshot.exists()) console.log("dado nao existente");
  const data = snapshot.val();
  console.log("sucesso na firebase")
  console.log(data);
  }catch(e){
    console.log("erro ao logar no firebase")
}









/*

let questions = [];
let userAnswers = [];

// Função para carregar as perguntas do servidor
fetch('/questions')
  .then(response => response.json())
  .then(data => {
    questions = formatQuestions(data);
    displayQuestion(0);
  });

// Formatar as questões para facilitar o uso
function formatQuestions(data) {
  const formatted = [];
  data.forEach(item => {
    const question = formatted.find(q => q.id === item.id_question);
    if (question) {
      question.answers.push({ id: item.id_answer, text: item.answer_text });
    } else {
      formatted.push({
        id: item.id_question,
        text: item.question_text,
        correctAnswerId: item.id_answer,
        answers: [{ id: item.id_answer, text: item.answer_text }],
      });
    }
  });
  return formatted;
}

// Exibir a pergunta atual
function displayQuestion(index) {
  if (index >= questions.length) {
    alert('Você terminou o quiz!');
    return;
  }

  const question = questions[index];
  const container = document.getElementById('question-container');
  container.innerHTML = `
    <div class="question">${question.text}</div>
    <div class="answers">
      ${question.answers.map(answer => `
        <input type="radio" name="question${question.id}" value="${answer.id}">
        <label>${answer.text}</label><br>
      `).join('')}
    </div>
    <button onclick="nextQuestion(${index})">Próxima</button>
  `;
}

// Ir para a próxima pergunta
function nextQuestion(index) {
  const selectedAnswer = document.querySelector(`input[name="question${questions[index].id}"]:checked`);
  if (selectedAnswer) {
    userAnswers[index] = selectedAnswer.value;
  }
  displayQuestion(index + 1);
}

// Submeter as respostas
function submitAnswers() {
  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === questions[index].correctAnswerId.toString()) {
      score++;
    }
  });
  alert(`Você acertou ${score} de ${questions.length} perguntas!`);
}
*/
