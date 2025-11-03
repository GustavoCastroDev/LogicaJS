// Criando variável que armazena número aleatório por meio da função 'gerarNumeroAleatorio'
let numeroSecreto = 5;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

// Função que verifica o 'chute' do usuário
function verificarChute() {
    // Variável 'chute' que armazena o valor inserido no input
    let chute = document.querySelector('input').value;
    
    // Criando bloco lógico para exibir mensagens
    if (chute == numeroSecreto) { // Caso o chute seja igual ao número secreto
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', 'Você acertou o número secreto!');

    } else {
        if (chute < numeroSecreto) { // Caso o chute seja menor que o número secreto
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', 'O número secreto é maior...');
        } else { // Caso o chute seja maior que o número secreto
            exibirTextoNaTela('h1', 'Quase!'); 
            exibirTextoNaTela('p', 'O número secreto é menor...');
        }
    }
}

// Função que gera número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












