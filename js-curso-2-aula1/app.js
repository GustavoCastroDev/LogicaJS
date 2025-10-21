// Criando variável que seleciona um arquivo HTML com 'document.querySelector'
let titulo = document.querySelector('h1');

// Inserindo um texto dentro da variável 'titulo' por meio do 'innerHTML'
titulo.innerHTML = 'Jogo do Número Secreto';

// Criando uma variável que seleciona o parágrafo em HTML
let paragrafo = document.querySelector('p');

// Inserindo um texto dentro do elemnto HTML por meio do 'innerHTML'
paragrafo.innerHTML = 'Bem vindo ao jogo! Adivinhe o número entre 1 e 100';

// Criando uma função para toda vez que o usuário clicar no botão 'chutar'
function verificarChute(){
    // Exibindo no console quando o usuário clica no botão por meio do console.log
    console.log('O usuário clicou no botão (Chutar)');
}
