// Criando função que exibe mensagem no console
window.onload = function mensagem(){ // 'window.onload' dispara o evento quando todos os elementos da página estão carregados
    console.log('Olá mundo!');
}

// Função que exibe mensagem junto ao nome do usuário
function mensagemNome(){
    let nome = document.querySelector('input').value;
    console.log(`Olá, ${nome}!`);
}