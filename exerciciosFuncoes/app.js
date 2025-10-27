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
    if(inputNome != ""){ // Se 'inputNome' for diferente de vazio ("")
        console.log(`Olá, ${nome}!`); // Exibe a mensagem no console com o nome do usuário
    } else{ 
        console.log('Preencha o campo com o seu nome!'); // Exibe uma mensagem no console
    }
}

// Função que recebe um número como parâmetro e retorna o dobro desse número
function calcularDobro(numero){
    let inputNumeroDbro = parseInt(document.getElementById('lblDobro'));

    const numero = inputNumeroDbro * inputNumeroDbro;

    console.log(numero);

}