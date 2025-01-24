
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAudN6Rkvq46AMWGh1cQ1d217LR-I9eIDY",
  authDomain: "pj-quiz-de-perguntas.firebaseapp.com",
  projectId: "pj-quiz-de-perguntas",
  storageBucket: "pj-quiz-de-perguntas.firebasestorage.app",
  messagingSenderId: "476430897593",
  appId: "1:476430897593:web:06cb32ad1e46375a886668",
  measurementId: "G-8GL8ETKQEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




function iniciar(){
    const nome = document.getElementById('nome').value;

  console.log(nome)

}




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
