// Criando variável 'numSecreto' que armazena a função que gera números aleatórios
let numSecreto = criaNumSecreto();

// Função "insereTexto" utiliza parâmetros para inserir texto em elementos HTML
function insereTexto(tag, texto) { // Inserindo os parâmetros que a função vai utilizar

  // Variável 'campo' seleciona o parâmetro como se fosse um elemento HTML
  let campo = document.querySelector(tag);

  // Inserindo dentro do elemento HTML o conteúdo contido no parâmetro/variável 'texto'
  campo.innerHTML = texto;
}

// Chamando a função 'insereTexto' e passando quais elemntos devem servir como parâmetro
insereTexto('h1', 'Jogo do número secreto!');
insereTexto('p', 'Adivinhe um número entre 1 e 10');

// Criando função que gera o número secreto e retorna o seu valor
function criaNumSecreto() {
  return parseInt(Math.random() * 10 + 1); // utilizando o return para retornar um número aleatório
}

// Criando uma função para toda vez que o usuário clicar no botão 'chutar'
function verificarChute() { // Função sem parâmetros e sem retorno

  // criando a variável 'chute' que seleciona o elemento HTML 'input'
  let chute = document.querySelector('input');

  // Comparando os valores de 'chute' e 'numSecreto' para retornar verdadeiro ou falso (boolean)
  console.log(chute == numSecreto); // Exibindo o número aleatório que foi retornado na função

  // Exibindo no console quando o usuário clica no botão por meio do console.log
  console.log('O usuário clicou no botão (Chutar)');
}

