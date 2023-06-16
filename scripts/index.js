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
                <input class="titulo-quizz" type="text" placeholder="Título do seu quizz">
                <input class="url-quizz" type="url" placeholder="URL da imagem do seu quizz">
                <input class="qtd-perguntas" type="text" placeholder="Quantidade de perguntas do quizz">
                <input class="qtd-niveis" type="text" placeholder="Quantidade de níveis do quizz">
            </div>
            <button class="botao-tela3" onclick = "verificaUrl()">
                <input type="text" placeholder="Título do seu quizz" data-test="title-input">
                <input type="url" placeholder="URL da imagem do seu quizz" data-test="img-input">
                <input type="text" placeholder="Quantidade de perguntas do quizz" data-test="questions-amount-input">
                <input type="text" placeholder="Quantidade de níveis do quizz" data-test="levels-amount-input">
            </div>
            <button class="botao-tela3" onclick="renderizarTela32()" data-test="go-create-questions">
                <p>Prosseguir pra criar perguntas</p>
            </button>
        </div>
    `;


}

function pegarInput(){
    const inputTitulo = document.querySelector('.titulo-quizz');
    console.log(inputTitulo.value);

    const tamTitulo = inputTitulo.value;//verificar tamanho da string
    console.log(tamTitulo.length);
    
    const inputUrl = document.querySelector('.url-quizz');
    console.log(inputUrl.value);

    const inputQtdPerguntas = document.querySelector('.qtd-perguntas');
    console.log(inputQtdPerguntas.value);

    const tamQtdPerguntas = inputQtdPerguntas.value;//verificar tamanho da string
    console.log(tamQtdPerguntas);

    const inputQtdNiveis = document.querySelector('.qtd-niveis');
    console.log(inputQtdNiveis.value);

    const tamQtdNiveis = inputQtdNiveis.value;//verificar tamanho da string
    console.log(tamQtdNiveis.length);

    if ( tamTitulo.length > 65 || tamTitulo.length < 20 ){
        if ( tamQtdPerguntas.length < 20 ){
            if ( tamQtdNiveis.length < 2 ){
                if( inputUrl.value === null || inputUrl.value === "" ){
                    alert('OPA');
                }
            }
        }
    }

}

function verificaUrl() {
    const string = document.querySelector('.url-quizz').value;
    try {
     let url = new URL(string);
     console.log("Valida URL!");
   } catch(err) {
       console.log("Invalida URL!");
   }
   pegarInput()
   isImage(string)
   renderizarTela32()
} 

function isImage(string) {
    return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(string);
}

// TELA 3.2
function renderizarTela32() {

    const tela32 = document.querySelector('.tela');
    tela32.innerHTML = `
    <div class="titulo-tela3">
        <div class="paragrafo-comeco">
            <p>Crie suas perguntas</p>
        </div>
        
        <div class="formulario-perguntas" data-test="question-ctn">
            <div class="titulo">Pergunta 1</div>
            <input type="text" placeholder="Texto da pergunta" data-test="question-input">
            <input type="text" placeholder="Cor de fundo da pergunta" data-test="question-color-input">

            <div class="titulo">Resposta correta</div>
            <input type="text" placeholder="Resposta correta" data-test="correct-answer-input">
            <input type="text" placeholder="URL da imagem" data-test="correct-img-input">

            <div class="titulo">Respostas incorretas</div>
            <input type="text" placeholder="Resposta incorreta 1" data-test="wrong-answer-input"">
            <input type="text" placeholder="URL da imagem 1" data-test="wrong-img-input">
            <input type="url" placeholder="Resposta incorreta 2" data-test="wrong-answer-input"">
            <input type="text" placeholder="URL da imagem 2" data-test="wrong-img-input">
            <input type="url" placeholder="Resposta incorreta 3" data-test="wrong-answer-input"">
            <input type="text" placeholder="URL da imagem 3" data-test="wrong-img-input">
        </div>
        <button class="botao-tela3" onclick="renderizarTela33()">
        <button class="botao-tela3" onclick="renderizarTela33()" data-test="go-create-levels">
            <p>Prosseguir pra criar níveis</p>
        </button>
    </div>
    `;

}

// TELA 3.3
function renderizarTela33() {
    const tela3 = document.querySelector('.tela');
    tela3.innerHTML = `
        <div class="titulo-tela3">
            <div class="paragrafo-comeco">
                <p>Agora, decida os níveis</p>
            </div>
            
            <div class="formulario-nivel" data-test="level-ctn">
                <div class="titulo">Nível 1</div>
                <input type="text" placeholder="Título do nível" data-test="level-input">
                <input type="text" placeholder="% de acerto mínima" data-test="level-percent-input">
                <input type="url" placeholder="URL da imagem do nível" data-test="level-img-input">
                <input type="text" placeholder="Descrição do nível" data-test="level-description-input">
            </div>

            <button class="botao-tela33" onclick="renderizarTela34()" data-test="finish">
                <p>Finalizar Quizz</p>
            </button>
        </div>
    `;
}
// TELA 3.4
function renderizarTela34() {

    const tela3 = document.querySelector('.tela');
    tela3.innerHTML = `
        <div class="titulo-tela3">
            <div class="paragrafo-comeco">
                <p>Seu quizz está pronto!</p>
            </div>
            
            <button class="botao-tela3" data-test="go-quiz">
                <p>Acessar Quizz</p>
            </button>
            <button class="botao-retornar" data-test="go-home">
                <p>Voltar pra home</p>
            </button>
        </div>
    `;
}

