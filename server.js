import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
//import { ControleNomes } from "../Controllers/controles.js" AJUSTAR

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
const appfire = initializeApp(firebaseConfig);
// Obter a instância do Firestore
const quiz_db = getFirestore(appfire);

const app = express();
app.use(express.json()); // Para lidar com JSON
app.use(express.static('view'));
app.get("/",(req, res)=>{res.sendFile(path.join(__dirname,'/view/index.html'));
});


// Rota para listar nomes
app.get('/name', (req, res) => {ControleNomes.getNome(req,res)
    });

// Rota para inserir nome
app.post("/name",(req,res)=>{ControleNomes.IncluirNome(req,res)})


// Rota para deletar nome
app.delete("/name/:id",(req,res)=>{ControleNomes.apagaNome(req,res)})

app.listen(8080,()=>{
    console.log("\n\n escutando a porta 8080")
})

