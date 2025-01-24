
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-auth-domain",
  projectId: "seu-project-id",
  storageBucket: "seu-storage-bucket",
  messagingSenderId: "seu-messaging-id",
  appId: "seu-app-id"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Obter a instância do Firestore
const db = getFirestore(app);

// Função para buscar as perguntas de um quiz
const loadQuiz = async (quizId) => {
  // Referência para o quiz no Firestore
  const quizRef = db.collection('quizzes').doc(quizId); // 'quizzes' é a coleção e quizId é o ID do quiz
  const quizSnap = await quizRef.get();

  if (quizSnap.exists) {
    console.log('Quiz encontrado:', quizSnap.data());
    const quizData = quizSnap.data();

    // Buscar as perguntas dessa coleção
    const questionsRef = quizRef.collection('questions'); // A subcoleção 'questions' dentro do quiz
    const querySnapshot = await questionsRef.get();

    const questions = [];
    querySnapshot.forEach((doc) => {
      questions.push(doc.data()); // Adiciona cada pergunta à lista
    });

    console.log('Perguntas:', questions);
    return { title: quizData.title, questions }; // Retorna o título do quiz e as perguntas
  } else {
    console.log('Quiz não encontrado!');
    return null;
  }
};



