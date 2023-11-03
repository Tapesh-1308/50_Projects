const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which programming language is known for its use in machine learning?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Ruby",
        correct: "b",
    },
    {
        question: "What is the primary function of a cascading style sheet (CSS)?",
        a: "Storing data",
        b: "Styling web content",
        c: "Handling user interactions",
        d: "Executing server-side code",
        correct: "b",
    },
    {
        question: "What does API stand for in web development?",
        a: "Application Programming Interface",
        b: "Advanced Programming Interface",
        c: "Application Process Integration",
        d: "Automated Programming Instruction",
        correct: "a",
    },
    {
        question: "Which programming language is often used for front-end web development?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C#",
        correct: "c",
    },
    {
        question: "What is the purpose of HTML forms in web development?",
        a: "Styling web content",
        b: "Creating animations",
        c: "Collecting user input",
        d: "Handling database queries",
        correct: "c",
    }, 
    {
        question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
        a: "Define the document type",
        b: "Create a comment",
        c: "Load external scripts",
        d: "Define page structure",
        correct: "a",
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const aText= document.getElementById("a_text");
const bText= document.getElementById("b_text");
const cText= document.getElementById("c_text");
const dText= document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQ = 0;
let score = 0;

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQ].correct) {
            score++;
        }

        currentQ++;

        if(currentQ < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function loadQuiz() {
    deselectAnswers();
    const currentQData = quizData[currentQ];
    questionEl.innerText = currentQData.question;
    aText.innerText = currentQData.a;
    bText.innerText = currentQData.b;
    cText.innerText = currentQData.c;
    dText.innerText = currentQData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

loadQuiz();