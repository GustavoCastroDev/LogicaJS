// Criando função que exibe mensagem no console
window.onload = function mensagem() { // 'window.onload' dispara o evento quando todos os elementos da página estão carregados
    console.log('Olá mundo!');
}

// Função que exibe mensagem junto ao nome do usuário
function mensagemNome() {
    // Declarando uma variável 'const' que possui um valor constante e a armazenando o valor do input na variável 'inputNome' por meio do id 'lblNome'
    const inputNome = document.getElementById('lblNome');

    // Armazenando o valor de 'inputNome' dentro da variável 'nome'
    const nome = inputNome.value;

    // Criando bloco de condição para garantir que o usuário preencha o input
    if (inputNome != "") { // Se 'inputNome' for diferente de vazio ("")
        console.log(`Olá, ${nome}!`); // Exibe a mensagem no console com o nome do usuário
    } else {
        console.log('Preencha o campo com o seu nome!'); // Exibe uma mensagem no console
    }
}

// Função que recebe um número como parâmetro e retorna o dobro desse número
function calcularDobro(numero) {
    // Criando variável que armazena o valor inserindo no input do ID 'lblDobro'
    let inputNumeroDobro = document.getElementById('lblDobro').value;

    // Criando variável 'numero' sem o 'let' (pois já foi declarada), que recebe o valor do input e a converte para int, além de elevar ao quadrado
    numero = parseInt(inputNumeroDobro * 2);

    // Exibindo o número no input
    console.log(`Dobro do número: ${numero}`);
}

// Função que recebe três números como parâmetros para calcular a média entre eles
function calcularMedia(numeroUm, numeroDois, numeroTres) {
    // Criando variável que armazena o valor inserido no input por meio dos IDs
    let inputNumUm = parseInt(document.getElementById('lblNumeroUm').value);
    let inputNumDois = parseInt(document.getElementById('lblNumeroDois').value);
    let inputNumTres = parseInt(document.getElementById('lblNumeroTres').value);

    // Criando variável que armazena a soma dos três valores inseridos nos inputs e a convertendo
    let mediaNumeros = (inputNumUm + inputNumDois + inputNumTres) / 3;

    // Exibindo a variável 'mediaNumeros' no console
    console.log(`A média dos números: ${inputNumUm}, ${inputNumDois} e ${inputNumTres} é: ${mediaNumeros}`);
}

// Criando função que recebe dois números como parâmetros e retorna qual o maior deles
function calcularMaior() {
    // Criando variáveis que armazenam os valores inseridos nos inputs pelos IDs
    let inputNumPrimeiro = document.getElementById('lblPrimeiro').value;
    let inputNumSegundo = document.getElementById('lblSegundo').value;

    // Criando variáveis que armazenam os valores inseridos nos inputs e os convertendo
    let NumPrimeiro = parseInt(inputNumPrimeiro);
    let NumSegundo = parseInt(inputNumSegundo);

    // Criando bloco lógico para determinar qual número entre os dois é maior
    if (NumPrimeiro > NumSegundo) {
        console.log(`O número ${NumPrimeiro} é maior que ${NumSegundo}`);
    } else if (NumPrimeiro < NumSegundo) {
        console.log(`O número ${NumSegundo} é maior que ${NumPrimeiro}`);
    } else {
        console.log(`Os números ${NumSegundo} e ${NumPrimeiro} são iguais`);
    }
}

// Função que recebe um número como parãmetro e retorna o quadrado dele
function calcularQuadrado(numeroQuadrado){
    // Criando variável que recebe o valor inserido no input pelo ID 'lblQuadrado'
    let inputNumQuadrado = document.getElementById('lblQuadrado').value;

    // Passando o valor inserido no input para variável 'numeroQuadrado'
    numeroQuadrado = parseInt(Math.pow(inputNumQuadrado, 2));

    console.log(`O número ${inputNumQuadrado} é igual a: ${numeroQuadrado}`);
}
