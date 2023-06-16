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
            <div class="exemplo-quizz" data-test="others-quiz">
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

        <div class="paragrafo-comeco-tela-32">
            <p>Crie suas perguntas</p>
        </div>

        <div class="titulo-tela32">
            <div class ="formulario-perguntas">
                <div class="pergunta-1">
                    <p>Pergunta 1</p>
                    <input type="text" placeholder="Título do seu quizz">
                    <input type="url" placeholder="URL da imagem do seu quizz">
                </div>
                <div class="resposta-correta">
                    <p>resposta-correta</p>
                    <input type="text" placeholder="Título do seu quizz">
                    <input type="url" placeholder="URL da imagem do seu quizz">
                </div>
                <div class="respostas-incorretas">
                    <p>respostas-incorretas</p>
                    <input type="text" placeholder="Título do seu quizz">
                    <input type="url" placeholder="URL da imagem do seu quizz">
                </div>
            </div>
            <div class="paragrafo-comeco">
                <p>Crie suas perguntas</p>
            </div>

            <div class="formulario-perguntas">

            <div class="titulo">Pergunta 1</div>
            <input type="text" placeholder="Texto da pergunta">
            <input type="color" placeholder="Cor de fundo da pergunta">

            <div class="titulo">Resposta correta</div>
            <input type="text" placeholder="Resposta correta">
            <input type="url" placeholder="URL da imagem">

            <div class="titulo">Resposta incorretas</div>
            <input type="text" placeholder="Resposta incorreta 1">
            <input type="url" placeholder="URL da imagem 1">
            <input type="text" placeholder="Resposta incorreta 2">
            <input type="url" placeholder="URL da imagem 2">
            <input type="text" placeholder="Resposta incorreta 3">
            <input type="url" placeholder="URL da imagem 3">
        </div>
            <button class="botao-tela3" onclick="renderizarTela33()">
                <p>Prosseguir pra criar níveis</p>
            </button>
    `;

}

// TELA 3.3
function renderizarTela33() {
    const tela3 = document.querySelector('.tela');
    tela3.innerHTML = `
        <div class="titulo-tela3">
            <div class="paragrafo-comeco">
                <p>Agora, decida os níveis</p>
            <div>
            
            <div class="formularionivel">
                <div class="titulo">Nível 1</div>
                <input type="text" placeholder="Título do nível">
                <input type="text" placeholder="% de acerto mínima">
                <input type="url" placeholder="URL da imagem do nível">
                <input type="text" placeholder="Descrição do nível">
            <div>

            <button class="botao-tela3" onclick="renderizarTela34()">
                <p>Finalizar Quizz</p>
            </button>
        <div>
    `;
}
// TELA 3.4
function renderizarTela34() {

    const tela3 = document.querySelector('.tela');
    tela3.innerHTML = `
        <div class="titulo-tela3">
            <div class="paragrafocomeco">
                <p>Seu quizz está pronto!</p>
            </div>
            
            <button class="botao-tela3">
                <p>Acessar Quizz</p>
            </button>
            <button class="botao-retornar">
                <p>Voltar pra home</p>
            </button>
        <div>
    `;
}

