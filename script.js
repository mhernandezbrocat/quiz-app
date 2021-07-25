// Crear el arreglo con las preguntas
const quizData = [
    {
        question: "What is the capital of Austria?",
        a: "Praga",
        b: "Viena",
        c: "Sofia",
        correct: "b",
    },
    {
        question: "What is the capital of Portugal?",
        a: "Lisboa",
        b: "Bruselas",
        c: "Oslo",
        correct: "a",
    },
    {
        question: "What is the capital of Eslovaquia?",
        a: "Berlin",
        b: "Bratislavia",
        c: "Munich",
        correct: "b",
    },
    {
        question: "What is the capital of Finlandia?",
        a: "Dublin",
        b: "Helsinki",
        c: "Amsterdam",
        correct: "b",
    },
    {
        question: "What is the capital of Croacia?",
        a: "Zagreb",
        b: "Varsovia",
        c: "Kiev",
        correct: "a",
    },
    {
        question: "What is the capital of Grecia?",
        a: "Berlin",
        b: "Atenas",
        c: "Roma",
        correct: "b",
    },
    {
        question: "What is the capital of Islandia?",
        a: "Dublin",
        b: "Reikiavik",
        c: "Skopie",
        correct: "b",
    },
    {
        question: "What is the capital of Letonia?",
        a: "Riga",
        b: "Tirana",
        c: "Baku",
        correct: "a",
    },
];

// manejar las variables del DOM
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
    //reiniciar quiz
    deselectAnswers();

    //cargar el arreglo con los datos en dicha posicion
    const currentQuizData = quizData[currentQuiz];

    //mostrar el texto 
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}


//obtener la respuesta del usuario
function getSelected() {
    let answer = undefined;

    //para lo que el marque va a devolver el id al que corresponde 
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

//reiniciar el quiz
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
