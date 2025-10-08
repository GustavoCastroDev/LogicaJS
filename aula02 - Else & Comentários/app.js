// 'alert' imprime uma mensagem na tela
alert('Boas vindas ao jogo do número secreto'); 

// Criando a variável 'numeroSecreto'
let numeroSecreto = 5;

// Criando uma variável 'chute' que armazena o dado dentro do prompt (input para o usuário inserir algum dado)
let chute = prompt('Escolha um número entre 1 e 10');

// 'console.log' é ideal para os desenvolvedores visualizarem informações em tempo real pelo console, sem que os usuários tenham acesso
console.log(numeroSecreto);

if (chute == numeroSecreto) { // Iniciando a condicional com 'if', onde se a 'chute' for igual (comparação) a 'numero Secreto'
    alert('Boa! Você descobriu o número secreto (5)'); // Exibe a mensagem de acerto
} else { // Else incia o caso contrário, 'senão'
    alert('Você errou! Experimente tentar novamente...'); // Exibe a mensagem de erro
}