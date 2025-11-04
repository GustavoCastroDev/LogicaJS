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
    if (peso < 18.5) {
        document.getElementById('lblSituacao').value = "Abaixo do peso";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (peso > 18.5 || peso <= 24.9) {
        document.getElementById('lblSituacao').value = "Peso adequado";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    } else if (peso > 25 || peso <= 29.9) {
        document.getElementById('lblSituacao').value = "Sobrepeso";
        document.getElementById('lblResultadoIMC').value = imc.toFixed(2); // '.toFixed(2)' exobe apenas duas casas decimais
    }
}

