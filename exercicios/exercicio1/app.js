// Exibindo mensagem
alert('Bem vindo ao nosso site!');

// Criando variáveis
let nome = "Gustavo";
let idade = 18;
let numVendas = 50;
let saldoDisponivel = 1000;

// Exibindo mensagem de erro através de uma variável
let mensagemErro = "Erro! Preencha todos os campos";
alert(mensagemErro);

// Criando campos que solicitam os dados e os armazenam em variáveis
let nomeUsuario = prompt("Digite o seu nome no campo:");
let idadeUsuario = prompt("Digite a sua idade no campo:");

// Criando a condicional que autoriza, ou não, o usuário de acordo com a idade
if(idadeUsuario >= 18){
    console.log('Autorizado! O usuário pode tirar a abilitação');
}else{
    console.log('Reprovado! O usuário não pode tirar a abilitação');
}

