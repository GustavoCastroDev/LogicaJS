// Criando variável 'saldo' dentro de um prompt
let saldo = prompt("Digite qual é o seu saldo:");

// Exibindo a 'pontos' dentro do console.log
console.log(saldo);

// Criando a condicional que determina se o jogador venceu ou não o jogo
if(saldo < 0){
    alert(`Cuidado! O seu saldo de R$ ${saldo} está negativo`);
} else{
    alert(`Continue assim! O seu saldo de R$ ${saldo} está positivo`);
}