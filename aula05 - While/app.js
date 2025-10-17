alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 3;
console.log(numeroSecreto);
let chute; // a variável 'chute' passa a ser apenas uma variável declarada, sem valor e que pode ser utilizada ao longo do  código

while (chute != numeroSecreto) { // while (enquanto) o 'chute' for diferente de 'numeroSecreto' execute o bloco de dados...
    chute = prompt('Adivinhe um número entre 1 e 10:'); // Reaproveitando a variável 'chute', dentro de um prompt
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else { // Criando bloco de decisão que dá dicas ao usuário
        if (chute > numeroSecreto) { // Informando que o 'chute' é maior que 'numeroSecreto'
            alert(`Quase! O número secreto é menor que ${chute}`);
        } else { // Informando que o 'chute' é menor que 'numeroSecreto'
            alert(`Quase! O número secreto é maior que ${chute}`);
        }
    }
}