const quizQuestions = [
    {
        question: 'What am I called?',
        a: 'Snow',
        b: 'Sand',
        c: 'Selman',
        d: 'None of the above',
        answer: 'a'
    }, {
        question: 'How old am I?',
        a: '22',
        b: '23',
        c: '25',
        d: '26',
        answer: 'd'
    }, {
        question: 'What state was I born?',
        a: 'Ogun State',
        b: 'Imo State',
        c: 'Oyo State',
        d: 'Osun State',
        answer: 'c'
    }, {
        question: 'How many courses did I write this semester?',
        a: '6',
        b: '7',
        c: '5',
        d: '3',
        answer: 'd'
    }, {
        question: 'What did I get into Unilorin?',
        a: '2017',
        b: '2020',
        c: '2019',
        d: '2018',
        answer: 'a'
    }, {
        question: 'What programming language do I write in?',
        a: 'PHP',
        b: 'Python',
        c: 'JavaScript',
        d: 'a & c',
        answer: 'd'
    }
];

const question_text = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".r_input");
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const sbmBtn = document.querySelector('#submit');

// const r_input = document.getElementsByClassName('r_input');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentData = quizQuestions[currentQuiz];

    question_text.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

// sbmBtn.addEventListener("click", () => {
//     currentQuiz++;
    
//     if (r_input != NULL) {
//         loadQuiz();
//     } else {
//         alert('choose an option');
//     }
    
// });

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            return answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
sbmBtn.addEventListener("click", () => {

    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizQuestions[currentQuiz].answer) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizQuestions.length) {
            loadQuiz();
        } else {
            alert('Quiz finished');
            quiz.innerHTML = `<h2>Your score is ${score}/${quizQuestions.length}
            <button onClick="location.reload();">Reload</button></h2>`
            // return currentQuiz = 0;
        }
    }
});