
/*
    objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele ;

        Passo 2 - identificar o clique no botão 

        Passo 3 - adicionar à classe ativo nos projetos escondidos 

    ojetivo 2 - esconder o botão de mostrar mais 
        Passo 1 - pegar o botão e esconder ele
*/


const botaoMostrarMenosProjeto = document.querySelector('.btn-mostrar-menos')
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll ('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotao();

    aparecerBotaoMostrarMenos()

});

botaoMostrarMenosProjeto.addEventListener('click', () => {
    mostrarMenos();
    voltaBotaoMostrarMais();
    esconderMostrarMenos();
});

function esconderMostrarMenos() {
    botaoMostrarMenosProjeto.classList.remove('aparecer-botao');
}

function mostrarMenos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
};

function voltaBotaoMostrarMais() {
    botaoMostrarProjetos.classList.remove('remover');
};

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
};

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
};

function aparecerBotaoMostrarMenos() {
    botaoMostrarMenosProjeto.classList.add('aparecer-botao');
};
