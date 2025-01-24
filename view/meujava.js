//SOMENTE AS CHAMADAS DE FUNÇÕES----------
// Array para armazenar os nomes
let nomes = [];

// Tempo inicial em segundos (1 minuto = 60 segundos)
let tempocorrido = 60;

// Função para atualizar o temporizador
function TempoReal() {
    // Atualiza o display
    document.getElementById('tempo').textContent = tempocorrido;

    // Se o tempo ainda não acabou, diminui em 1 segundo
    if (tempocorrido > 0) {
        tempocorrido--;
    } else {// Quando o tempo chegar a 0, exibe uma mensagem
        alert('Fim de Jogo, Tempo Esgotado!');
        clearInterval(timerInterval);

        //document.getElementById('tempo').textContent = 'Fim de Jogo,Tempo Esgotado!';
        //clearInterval(timerInterval); // Para o temporizador
    }
}

// Define o temporizador para rodar a cada 1 segundo
const timerInterval = setInterval(TempoReal, 1000);

// Função para adicionar nome à lista
function AdicionarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome à lista de nomes
    nomes.push(nome);
    nomeInput.value = ''; // Limpa o campo de input


} //Função para listar nomes
function listarnomes() {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8080/name');
    req.onload = () => {
        const jogadores = JSON.parse(req.responseText);
        let listHTML = '<h2>Lista de jogadores:</h2><ul>';
        jogadores.forEach(jogadores => {
            listHTML += `<li>(ID: ${jogadores.id})</li>`;
        });
        listHTML += '</ul>';
        document.getElementById('ListaJogadores').innerHTML = listHTML;
    };
    req.send();
}
/*

// Função para editar o nome
function editarNome(index) {
    const novoNome = prompt("Digite o novo nome:", nomes[index]);
    if (novoNome !== null && novoNome.trim() !== "") {
        nomes[index] = novoNome.trim();
        atualizarLista();
    }
}*/

// Função para excluir o nome
function ExcluirNome(index) {
    if (confirm("Você tem certeza que deseja excluir esse jogador?")) {
        nomes.splice(index, 1); // Remove o nome do array
        //atualizarLista(); // Atualiza a lista na tela
    }
}

function iniciar(){
    console.log("nomes")

}


