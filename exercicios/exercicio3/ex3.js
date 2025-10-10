// Criando variável 'pontos' dentro de um prompt
let pontos = prompt("Digite qual foi a sua pontuação");

// Exibindo a 'pontos' dentro do console.log
console.log(pontos);

// Criando a condicional que determina se o jogador venceu ou não o jogo
if(pontos >= 100){
    alert("Parabéns, Você venceu o game!");
} else{
    alert("Você perdeu, tente novamente!");
}