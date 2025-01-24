
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

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar nome à lista
function adicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome à lista de nomes
    nomes.push(nome);
    nomeInput.value = ''; // Limpa o campo de input

    // Atualiza a exibição da lista
    atualizarLista();
}

// Função para atualizar a lista de nomes
function atualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = ''; // Limpa a lista atual

    // Cria os itens da lista
    nomes.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;

        // Adiciona botões de Ação (Editar e Excluir)
        const actionButtons = document.createElement('div');
        actionButtons.classList.add('action-buttons');

        // Botão de Editar
        const editarButton = document.createElement('button');
        editarButton.textContent = "Editar";
        editarButton.onclick = () => editarNome(index);
        actionButtons.appendChild(editarButton);

        // Botão de Excluir
        const excluirButton = document.createElement('button');
        excluirButton.textContent = "Excluir";
        excluirButton.onclick = () => excluirNome(index);
        actionButtons.appendChild(excluirButton);

        li.appendChild(actionButtons);
        lista.appendChild(li);
    });
}

// Função para editar o nome
function editarNome(index) {
    const novoNome = prompt("Digite o novo nome:", nomes[index]);
    if (novoNome !== null && novoNome.trim() !== "") {
        nomes[index] = novoNome.trim();
        atualizarLista();
    }
}

// Função para excluir o nome
function excluirNome(index) {
    if (confirm("Você tem certeza que deseja excluir esse nome?")) {
        nomes.splice(index, 1); // Remove o nome do array
        atualizarLista(); // Atualiza a lista na tela
    }
}




