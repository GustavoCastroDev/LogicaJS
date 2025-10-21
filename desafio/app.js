alert('Boas vindas ao jogo do número secreto');

// prompt que armazaena o limite máximo do limite que contém o intervalo de números onde esta o número secreto
let intervalo = prompt('Digite o intervalo que número secreto está contido:');

// 'Math.random' é uma função em JS que gera um número aleatório, somamos +1 pois a função exclúi o número ao lado (100)
let numeroSecreto = parseInt(Math.random() * intervalo + 1);
console.log(`Número secreto: ${numeroSecreto}`);
let chute; // a variável 'chute' passa a ser apenas uma variável declarada, sem valor e que pode ser utilizada ao longo do  código
let tentativas = 1; // Criando uma varável que armazena a quantidade de tentativas, que logicamente, começa como 1

while (chute != numeroSecreto) { // while (enquanto) o 'chute' for diferente de 'numeroSecreto' execute...
    chute = prompt(`Adivinhe um número entre 1 e ${intervalo}:`); // Reaproveitando a variável 'chute', dentro de um prompt
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break; // Caso a condição seja atendida, o loop do while se encerra, junto ao jogo
    } else { // Criando bloco de decisão que dá dicas ao usuário
        if (chute > numeroSecreto) { // Informando que o 'chute' é maior que 'numeroSecreto'
            alert(`Quase! O número secreto é menor que ${chute}`);
        } else { // Informando que o 'chute' é menor que 'numeroSecreto'
            alert(`Quase! O número secreto é maior que ${chute}`);
        }
        // Inserindo a incrementação da variável no bloco onde o usuário sempre erra no chute
        tentativas++;
    }
}

// Utilizando operador ternário para ajustar a concordância das tentativas
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
// 'palavraTentativas' é a variável que armazena o operador ternário
// O trecho 'palavraTentativas = tentativas > 1 ?' funciona como uma pergunta, onde se questiona se 'palavraTentativas' é maior que 'tentativas'
// Caso seja maior, exibe 'tentativas' (no plural). Senão (:), exibe 'tentativa' (no singular)

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativas}.`);
