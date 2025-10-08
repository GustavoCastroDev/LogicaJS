// Criando prompt para armazenar 'numero'
let numero = prompt("Olá! Digite um número para descobrir se este é negativo ou positivo:");

// Visualizando o valor da 'diaSemana' por meio do 'console.log'
console.log(numero)

// Criando a condicional que altera as frases que serão exibida
if(numero >= 0){
    alert(`O número ${numero} é positivo.`);
} else {
    alert(`O número ${numero} é negativo.`);
}