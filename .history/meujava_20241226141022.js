
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


import { getFirestore, collection, addDoc } from 'firebase/firestore';

const meubanco = getFirestore();

const addUserData = async () => {
  try {
    const docRef = await addDoc(collection(meubanco, 'users'), {
      perguntas: 'como se inicial um HTML?',
      id: '1',
      resposta: 25,
    });
    console.log('Documento adicionado com ID:', docRef.id);
  } catch (e) {
    console.error('Erro ao adicionar documento:', e);
  }
};

addUserData();



