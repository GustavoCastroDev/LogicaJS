alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else { // Criando bloco de decisão que dá dicas ao usuário
    if(chute > numeroSecreto){ // Informando que o 'chute' é maior que 'numeroSecreto'
        alert(`Quase! O número secreto é maior que ${chute}`);
    } else{ // Informando que o 'chute' é menor que 'numeroSecreto'
        alert(`Quase! O número secreto é menor que ${chute}`);
    }
}