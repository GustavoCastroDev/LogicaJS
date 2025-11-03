// Criando variável que armazena número aleatório por meio da função 'gerarNumeroAleatorio'
let numeroSecreto = gerarNumeroAleatorio();

// Criando variável que armazena número de tentativas do usuário
let tentativa = 1;

// Utilizando operador ternário para ajustar a concordância das tentativas
let palavraTentativa = tentativa > 1? 'tentativa' : 'tentativas';

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

    // Variável que armazena a frase que é exibida ao usuário junto com as variáveis
    let fraseTentativas = `Você descobriu o número secreto (${numeroSecreto}) em ${tentativa} ${palavraTentativa}.`;
    
    // Criando bloco lógico para exibir mensagens
    if (chute == numeroSecreto) { // Caso o chute seja igual ao número secreto
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', fraseTentativas);

    } else {
        if (chute < numeroSecreto) { // Caso o chute seja menor que o número secreto
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', 'O número secreto é maior...');
        } else { // Caso o chute seja maior que o número secreto
            exibirTextoNaTela('h1', 'Quase!'); 
            exibirTextoNaTela('p', 'O número secreto é menor...');
        }
        // Incrementando a variável para cada vez que o usuário errar
        tentativa++;
    }
}

// Função que gera número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}












