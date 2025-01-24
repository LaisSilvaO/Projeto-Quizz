import { getFirestore, collection, addDoc } from 'firebase/firestore';

const meubanco = getFirestore();

const addUserData = async () => {
  try {
    const docRef = await addDoc(collection(meubanco, 'users'), {
      name: 'João',
      email: 'joao@example.com',
      age: 25,
    });
    console.log('Documento adicionado com ID:', docRef.id);
  } catch (e) {
    console.error('Erro ao adicionar documento:', e);
  }
};

addUserData();
