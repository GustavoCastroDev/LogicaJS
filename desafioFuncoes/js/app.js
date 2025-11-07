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

// Criando função que converte valor em dolar para real
function calcularDolar(real){
    // Variável que acumula valor inserido no campo que recebe o valor em dolar
    let lblInputDolar = document.getElementById('lblReal').value;

    // Armazenando o valor inserido no parâmetro/variável da função 'real' por meio de 'lblInputDolar'
    real = parseFloat(lblInputDolar); // Realizando conversão para Float

    // Criando a variável 'dolar'
    let dolar = real/4.8;

    // Exibindo o valor convertido no input por meio do ID
    document.getElementById('lblDolar').value = dolar;

}

// Criando função que calcula perímetro de retângulo com parâmetros
function calcularPerimetro(alturaRetangulo, larguraRetangulo){
    // Criando variáveis que armazenam os valores inseridos por meio dos IDs
    let inputAlturaRetangulo = document.getElementById('lblAlturaRetangulo').value;
    let inputLarguraRetangulo = document.getElementById('lblLarguraRetangulo').value;

    // Armazenando os valores inseridos nos campos para os parâmetros/variáveis que a função utiliza
    alturaRetangulo = parseFloat(inputAlturaRetangulo); // Realizando conversão para Float
    larguraRetangulo = parseFloat(inputLarguraRetangulo); // Realizando conversão para Float

    // Criando variável que armazena o valor do perímetro
    let perimetro = (inputAlturaRetangulo * 2) + (inputLarguraRetangulo * 2);

    // Exibindo o valor do perímetro no seu campo por meio do ID
    document.getElementById('lblPerimetro').value = perimetro;

}

// Criando função que calcula o valor da área de um círculo utilizando parâmetro
function calcularArea(raio){
    // Variável que armazena o valor inserido no campo por meio do ID
    let inputRaio = document.getElementById('lblRaio').value;

    // Armazenando o valor obtido no input no parâmetro/variável que a função utiliza
    raio = parseFloat(inputRaio); // Realizando conversão para Float

    // Criando variável que armazena o valor da área do cículo
    let areaCirculo = raio * raio * 3.14;

    // Exibindo no campo o valor da área por meio do ID
    document.getElementById('lblArea').value = areaCirculo.toFixed(2); // Exibindo apenas duas casas decimais
}

