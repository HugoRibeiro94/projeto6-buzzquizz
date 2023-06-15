// Autorização do Token
axios.defaults.headers.common['Authorization'] = 'Wzez4a3YIDoCsVRbeXAYFCmh';

// Buscar quizzes no servidor e renderizar
let quizzes = [];

function carregarQuizzes(){

    const promise = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes',);
    promise.then(quizzesRecebidos);
}
carregarQuizzes()

// Receber quizzes vindo do servidor
function quizzesRecebidos(res){
    console.log(res.data);
    quizzes = res.data;

    renderizarQuizzes()
}

// Mostrar quizzes no HTML 
function renderizarQuizzes(){

    const containerQuizz = document.querySelector('.container-quizzes');
    containerQuizz.innerHTML = '';

    for( let i = 0; i < quizzes.length; i++){

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