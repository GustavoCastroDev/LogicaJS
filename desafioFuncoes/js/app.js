// Criando função responsável por somente calcular o IMC
function calcularIMC(altura, peso) {
    // Variáveis que armazenam os valores inseridos nos campos com base dos IDs
    let inputAltura = document.getElementById('lblAltura').value;
    let inputPeso = document.getElementById('lblPeso').value;

    // Passando os valores armazenados no campos para as variáveis/parâmetros da função
    altura = parseFloat(inputAltura);
    peso = parseFloat(inputPeso);

    // Exibindo os valores inseridos pelo usuário no console
    console.log(`Altura: ${altura} metro`);
    console.log(`Peso: ${peso}kg`);

    // Criando as variáveis
    let imc = peso / (altura * altura);

    // Criando bloco lógico que determina a situação de acordo com o peso
    if (imc < 18.5) {
        document.getElementById('lblSituacao').value = "Abaixo do peso";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (imc > 18.5 && imc <= 24.9) {
        document.getElementById('lblSituacao').value = "Peso adequado";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (imc > 25 && imc <= 29.9) {
        document.getElementById('lblSituacao').value = "Sobrepeso";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (imc > 30 && imc <= 34.9) {
        document.getElementById('lblSituacao').value = "Obesidade Grau 1";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (imc > 35 && imc <= 39.9) {
        document.getElementById('lblSituacao').value = "Obesidade Grau 2";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else {
        document.getElementById('lblSituacao').value = "Obesidade Grau 3";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    }
}

// Criando função que retorna o fatorial de um número utilizando parâmetro
function calcularFatorial(numFatorial){
    inputNumDesejado = document.getElementById('lblNumFatorial').value;
    
    if (inputNumDesejado === 0 || inputNumDesejado === 1){
        document.getElementById('lblFatorialResultado').value = 1;
    } else {
        numFatorial = inputNumDesejado * calcularFatorial(inputNumDesejado - 1);
        document.getElementById('lblFatorialResultado').value = numFatorial;
    }
}

