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
                <input class="titulo-quizz" type="text" placeholder="Título do seu quizz" data-test="title-input">
                <input class="url-quizz" type="url" placeholder="URL da imagem do seu quizz" data-test="img-input">
                <input class="qtd-perguntas" type="text" placeholder="Quantidade de perguntas do quizz" data-test="questions-amount-input">
                <input class="qtd-niveis" type="text" placeholder="Quantidade de níveis do quizz" data-test="levels-amount-input">
            </div>
            <button class="botao-tela3" onclick="verificaUrl()" data-test="go-create-questions">
                <p>Prosseguir pra criar perguntas</p>
            </button>
        </div>
    `;

}

function pegarInput() {
    const inputTitulo = document.querySelector('.titulo-quizz');
    console.log(inputTitulo.value);

    const tamTitulo = inputTitulo.value;//verificar tamanho da string
    console.log(tamTitulo.length);

    const inputUrl = document.querySelector('.url-quizz');
    console.log(inputUrl.value);

    const inputQtdNiveis = document.querySelector('.qtd-niveis');
    console.log(inputQtdNiveis.value);

    const tamQtdNiveis = inputQtdNiveis.value;//verificar tamanho da string
    console.log(tamQtdNiveis.length);
}

function verificaUrl() {
    const string = document.querySelector('.url-quizz').value;
    try {
        let url = new URL(string);
        console.log("Valida URL!");
    } catch (err) {
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
    <div class="titulo-tela3 teste gabriel hugo">
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
        <button class="botao-tela3" onclick="renderizarTela33()" data-test="go-create-levels">
            <p>Prosseguir pra criar níveis</p>
        </button>
    </div>
    `;
}

function criar_perguntas() {
    let tituloQuiz = document.querySelector(".Título-quiz").value;
    console.log(tituloQuiz);
    let imagemQuiz = document.querySelector(".imagem-quiz").value;
    console.log(imagemQuiz);
    let perguntasQuiz = document.querySelector(".quantidade-perguntas-quiz").value;
    console.log(perguntasQuiz);
    let niveisQuiz = document.querySelector(".niveis-quiz").value;
    console.log(niveisQuiz);

    let check1 = check_titulo(tituloQuiz);
    let check2 = check_url(imagemQuiz);
    let check3 = check_quantidade_perguntas(perguntasQuiz);
    let check4 = check_niveis(niveisQuiz);

    if (check1 === 1 && check2 === 1 && check3 === 1 && check4 === 1) {
        //fechar telaInscricao1
        let telaInscricao1 = document.querySelector(".telaInscricao1");
        telaInscricao1.classList.add("desativado");
        console.log("telaInscricao1 desabilitada");
        //ligar telaInscricao2
        let telaInscricao2 = document.querySelector(".telaInscricao2");
        telaInscricao2.classList.remove("desativado");
        console.log("telaInsercao2 habilitada");
        objetoQuizzAtual.title = tituloQuiz;
        objetoQuizzAtual.image = imagemQuiz;
        quantidadeNiveis = niveisQuiz;
        quantidadeQuestoes = perguntasQuiz;

        renderizarTela32()(perguntasQuiz, niveisQuiz);

    } else {
        alert("Inserção inválida");
    }
}

function renderizar_tela2(perguntas, niveis) {
    let tela2 = document.querySelector(".inserirAqui");
    for (i = 0; i < perguntas; i++) {

        tela2.innerHTML += `<details class="collapse ${i + 1}">
            <summary class="titlePergunta ${i + 1}">
            <div class="titlePerguntaNome">Pergunta ${i + 1}</div>
            <div class="iconePergunta"></div>
            </summary>
            <div class="descriptionPergunta ${i + 1}">
                <div class="comeco ${i + 1}">
                    <input type="text"class"TextoPergunta ${i + 1}" placeholder = "Texto da Pergunta">
                    <input type="color"class="CorFundoPergunta ${i + 1}"placeholder = "Cor de fundo da Pergunta">
                </div>
                <div class="respostaCerta ${i + 1}">Resposta Correta
                    <input type="text"class="RespostaCorreta ${i + 1}"placeholder = "Resposta Correta">
                    <input type="url"class="ImagemRespostaCorreta ${i + 1}"placeholder = "URL da Imagem">
                </div>
                <div class="respostasErradas ${i + 1}">Respostas incorretas
                    <input type="text"class="RespostaIncorreta1 ${i + 1}"placeholder = "Resposta Incorreta 1">
                    <input type="url"class="ImagemRespostaIncorreta1 ${i + 1}"placeholder = "URL da Imagem 1">
                    <input type="text"class="RespostaIncorreta2 ${i + 1}"placeholder = "Resposta Incorreta 2">
                    <input type="url"class="ImagemRespostaIncorreta2 ${i + 1}"placeholder = "URL da Imagem 2">
                    <input type="text"class="RespostaIncorreta3 ${i + 1}"placeholder = "Resposta Incorreta 3">
                    <input type="url"class="ImagemRespostaIncorreta3 ${i + 1}"placeholder = "URL da Imagem 3">
                </div>
            </div>
        </details>
        `
    }
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

