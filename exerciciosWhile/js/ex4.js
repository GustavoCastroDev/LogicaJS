// Criando prompt para o usuário inserir um valor numérico máximo (número desejado) e convenrtendo essa valor para INT
let numeroMax = parseInt(prompt('Insira um número para a contagem progressiva:'));

// Criando um número mínimo de referência (0)
let numMin = 0;

// Criando bloco de condições para que não haja erro de lógica
if (numeroMax >= 0) {
    // Criando o loop com while para números positivos
    while (numMin <= numeroMax) { // Enquanto o número mínimo for menor ou igual ao número máximo...
        console.log(`Número: ${numMin}`); // Imprimindo o número mínimo no console
        numMin++; // Incrementando o número mínimo até o limite do loop (número máximo)
    }
} else if (numeroMax <= 0) {
    // Criando o loop com while para números negativos
    while (numMin >= numeroMax) { // Enquanto o número mínimo for maior ou igual ao número máximo...
        console.log(`Número: ${numMin}`); // Imprimindo o número mínimo no console
        numMin--; // Decrementando o número mínimo até o limite do loop (número máximo)
    }
}

