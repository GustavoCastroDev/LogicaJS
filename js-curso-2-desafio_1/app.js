// Variável 'titulo' que manipula o elemento h1 por meio do JS
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Função 'btnConsole' que contabiliza quantas vezes o botão 'Console' foi clicado no console
function btnConsole(){
    console.log('O botão Console foi clicado');
}

// Função 'btnAlerta' que exibe um alerta junto a uma mensagem ao clicar no botão 'Alerta'
function btnAlerta(){
    alert('Eu amo JS');
}

// Função 'btnPrompt' armazena uma resposta por meio de um Prompt e a exibe por meio de um Alert
function btnPrompt(){
    let cidade = prompt('Diga uma cidade que já visitou no Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

// Função 'btnSoma' armazena dois números inteiros e exibe a soma deles em um alerta
function btnSoma(){
    let numero1 = parseInt(prompt('Digite um número inteiro:')); // Declarando variável e convertendo para Int
    let numero2 = parseInt(prompt('Agora digite outro número inteiro:')); // Declarando variável e convertendo para Int
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é igual a: ${soma}`);
}