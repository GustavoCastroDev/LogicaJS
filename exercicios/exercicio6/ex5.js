// Criando um prompt que armazena a variável 'nome'
let nome = "Gustavo";

// Exibindo mensagem de boas vindas no console
console.log(`Olá, seja bem vindo(a) ${nome}!`);

// Exibindo mensagem de boas vindas com alert
alert(`Olá, seja bem vindo(a) ${nome}!`);

// Criando um prompt que armazena a variável 'pergunta' e a exibindo no console
let pergunta = prompt('Qual sua linguagem de programação favorita?');
console.log(`A linguagem de programação favorita de ${nome} é ${pergunta}`);

// Criando duas variáveis que armazenam valores numéricos e as convertendo
let valor1 = 30;
let valor2 = 70;

// Criando variável que armazena a soma de 'valor1' e 'valor2' e a exibindo no console
let resultSoma = parseInt(valor1 + valor2);
console.log(`O valor da soma de ${valor1} e ${valor2} é igual a: ${resultSoma}`);

// Criando variável que armazena a diferença de 'valor1' e 'valor2' e a exibindo no console
let resultSub = parseInt(valor1 - valor2);
console.log(`O valor da soma de ${valor1} e ${valor2} é igual a: ${resultSub}`);

// Armazenando a variável 'idade' em um prompt e a convertendo para Int
let idade = parseInt(prompt('Qual a sua idade?'));

// Criando condicional para descobrir se o usuário é menor/maior de idade
if(idade < 18){
    console.log(`O usuário ${nome} é menor de idade. Possui ${idade} anos`);
} else {
    console.log(`O usuário ${nome} é maior de idade. Possui ${idade} anos`);
}

// Criando uma variável 'numero' e descobrindo se o valor é negativo/positivo por meio de If e Else
let numero = 1;
if(numero < 0){
    alert(`O número ${numero} é negativo.`);
} else {
    alert(`O número ${numero} é positivo.`);
}

// Criando um loop com while que exibe os números de 1 a 10 no console
while(numero <= 10){
    console.log(numero++);
}

// Criando uma variável 'nota' que recebe número aleatórios de 1 a 10
let nota = parseInt(Math.random() * 10 + 1);

// Determinando se o usuário está reprovado/aprovado por meio de If e Else e exibindo no console
if(nota < 7){
    console.log(`O aluno ${nome} está reprovado, pois teve ${nota} de nota.`);
} else {
    console.log(`O aluno ${nome} está aprovado, pois teve ${nota} de nota.`);
}

// Criando a variável 'numAleatorio' que recebe um número entre 1 e 1000 e o exibindo no console
let numAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(`Numero aleatório entre 1 e 1000: ${numAleatorio}`);