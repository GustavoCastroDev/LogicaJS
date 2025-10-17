// Criando a variável e a armazenando dentro de um 'prompt'
let numero  = prompt('Digite um número para contagem regressiva até 0:');

// Criando bloco de condição com While
while(numero >= 0){ // Loop para números positivos
    alert(`Número: ${numero}`);
    numero--;
}

while(numero <= 0){ // Loop para número negativos
    alert(`Número: ${numero}`);
    numero++;
}