// 'alert' imprime uma mensagem na tela
alert('Boas vindas ao jogo do número secreto'); 

// Criando a variável 'numeroSecreto'
let numeroSecreto = 9;

// Criando uma variável 'chute' que armazena o dado dentro do prompt (input para o usuário inserir algum dado)
let chute = prompt('Escolha um número entre 1 e 10');

// 'console.log' imprime mensagens no console, permitindo testar informações relevantes durante a execução de um programa.
console.log(numeroSecreto);

if (chute == numeroSecreto) { // Iniciando a condicional com 'if', onde se a 'chute' for igual (comparação) a 'numero Secreto'
    alert(`Boa! Você descobriu o número secreto: ${numeroSecreto}`); // exemplo de concatenação com Template String, utilizando crazes duplas (``) e ${variável}
} else { // Else incia o caso contrário, 'senão'
    alert('Você errou! Experimente tentar novamente...'); // Exibe a mensagem de erro
}