// Autorização do Token
axios.defaults.headers.common['Authorization'] = 'Wzez4a3YIDoCsVRbeXAYFCmh';

// Buscar quizzes no servidor e renderizar
let quizzes = [];

function carregarQuizzes() {

    const promise = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes',);
    promise.then(quizzesRecebidos);
}
carregarQuizzes()

// Receber quizzes vindo do servidor
function quizzesRecebidos(res) {
    console.log(res.data);
    quizzes = res.data;

    renderizarQuizzes()
}

// Mostrar quizzes no HTML 
function renderizarQuizzes() {

    const containerQuizz = document.querySelector('.container-quizzes');
    containerQuizz.innerHTML = '';

    for (let i = 0; i < quizzes.length; i++) {

        let quizz = quizzes[i];

        containerQuizz.innerHTML += `
            <div class="exemplo-quizz">
                <img src='${quizzes[i].image}'>
                <p>${quizzes[i].title}</p>
            </div>
        `
    }
    console.log(containerQuizz);
}

// TELA 3.1
function renderizarTela3() {

    const tela3 = document.querySelector('.tela');
    tela3.innerHTML = `
        <div class="titulo-tela3">
            <div class="paragrafo-comeco">
                <p>Comece pelo começo</p>
            </div>
            <div class="formulario-usuario">
                <input type="text" placeholder="Título do seu quizz">
                <input type="url" placeholder="URL da imagem do seu quizz">
                <input type="text" placeholder="Quantidade de perguntas do quizz">
                <input type="text" placeholder="Quantidade de níveis do quizz">
            </div>
            <button class="botao-tela3" onclick="renderizarTela32()">
                <p>Prosseguir pra criar perguntas</p>
            </button>
        </div>
    `;
}

// TELA 3.2

function renderizarTela32() {

    const tela32 = document.querySelector('.tela');
    tela32.innerHTML = `
        <div class="titulo-tela32">
            <div class="paragrafo-comeco-tela-32">
                <p>Crie suas perguntas</p>
            </div>
            <div class="pergunta-1">
                <p class="titulo-pergunta-1">Pergunta 1</p>
                <input type="text" placeholder="Título do seu quizz">
                <input type="url" placeholder="URL da imagem do seu quizz">
            </div>
            <div class="resposta-correta">
                <p class="titulo-resposta-correta">Resposta correta</p>
                <input type="text" placeholder="Título do seu quizz">
                <input type="url" placeholder="URL da imagem do seu quizz">
            </div>
            <div class="respostas-incorretas">
                <input type="text" placeholder="Título do seu quizz">
                <input type="url" placeholder="URL da imagem do seu quizz">
                <input type="text" placeholder="Quantidade de perguntas do quizz">
                <input type="text" placeholder="Quantidade de níveis do quizz">
                <input type="text" placeholder="Quantidade de perguntas do quizz">
                <input type="text" placeholder="Quantidade de níveis do quizz">
            </div>
            <button class="botao-tela32" onclick="renderizarTela33()">
                <p>Prosseguir pra criar níveis</p>
            </button>
        </div>
    `;

}


// TELA 3.3
function renderizarTela33() {
    alert('teste');

}


