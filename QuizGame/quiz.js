let questionBook=[{
    id:"qa-1",
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Rails"],
    answer: "React"
},{
    id:"qa-2",
    question: "Which of the following is a JavaScript library?",
    options: ["Angular", "Vue", "jQuery", "Ember"],
    answer: "jQuery"
},{
    id:"qa-3",
    question: "what is the full form of HTML?",
    options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language", "Hypertext Transfer Protocol"],
    answer: "Hyper Text Markup Language"
},{
    id:"qa-4",
    question: "what is full form of BOM?",
    options: [ "Basic Object Model","Browser Object Model", "Base Object Model", "Backend Object Model"],
    answer: "Browser Object Model"
},{

    id:"qa-5",
    question: "what is full form of DOM?",
    options: [ "Data Object Model", "Document Oriented Model", "Data Oriented Model", "Document Object Model"],
    answer: "Document Object Model"
},{
    id:"qa-6",
    question: "what is full form of API?",
    options: ["Application Programming Interface", "Application Programming Integration", "Application Programming Internet", "Application Programming Interchange"],
    answer: "Application Programming Interface"
},{
    id:"qa-7",
    question: "what is full form of JSON?",
    options: ["JavaScript Object Notation", "JavaScript Object Network", "JavaScript Object Node", "JavaScript Object Name"],
    answer: "JavaScript Object Notation"
},{
    id:"qa-8",
    question: "what is full form of AJAX?",
    options: ["Asynchronous JavaScript and XML", "Asynchronous JavaScript and XHTML", "Asynchronous JavaScript and XQuery", "Asynchronous JavaScript and XSLT"],
    answer: "Asynchronous JavaScript and XML"
},{
    id:"qa-9",
    question: "what is full form of SQL?",
    options: [ "Simple Query Language", "Standard Query Language", "Structured Query Language","System Query Language"],
    answer: "Structured Query Language"
},{
    id:"qa-10",
    question: "what is full form of GEC in JavaScript?",
    options: [ "global execution code", "global execution class","global execution context", "global execution constructor"],
    answer: "global execution context"
}
]

let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let scoreElement = document.getElementById("score");

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {

    let { question, options, answer } = questionBook[currentQuestionIndex];

    scoreElement.textContent = `Score: ${score}/${questionBook.length}`;

    questionElement.textContent = question;

    options.map((opt) => {

        let btn = document.createElement("button");

        btn.textContent = opt;
        btn.setAttribute("class", "btn");

        optionsElement.append(btn);

        btn.addEventListener("click", () => {

            if (opt === answer) {
                btn.style.backgroundColor = "green";
                score += 1;
            }
            else {
                btn.style.backgroundColor = "red";
                score -= 0.25;
            }

            scoreElement.textContent = `Score: ${score}/${questionBook.length}`;

            let allButtons = document.querySelectorAll(".btn");

            allButtons.forEach((v) => {
                v.disabled = true;
            });

            setTimeout(() => {
                nextQuestion();
            }, 1000);

        });

    });
}

displayQuestion();


function nextQuestion() {

    currentQuestionIndex++;

    optionsElement.innerHTML = "";

    if (currentQuestionIndex < questionBook.length) {

        displayQuestion();

    }
    else {

        let quiz = document.querySelector(".quiz");

        let percentage = (score / questionBook.length) * 100;

        let message = "";

        if (percentage === 100) {
            message = "Perfect! You answered every question correctly!";
        }
        else if (percentage >= 70) {
            message = "Excellent performance! Keep it up!";
        }
        else if (percentage >= 40) {
            message = "Good effort! Keep practicing!";
        }
        else {
            message = "Don't give up! Practice makes you better!";
        }

        quiz.classList.add("completed");

        quiz.innerHTML = `
            <div class="celebration">🎉🏆🎉</div>

            <h1 class="completion-title">
                Quiz Completed!
            </h1>

            <p class="completion-message">
                ${message}
            </p>

            <div class="final-score">
                <h2>Your Final Score</h2>
                <p>${score.toFixed(2)} / ${questionBook.length}</p>
            </div>

            <button id="restartButton" onclick="restartQuiz()">
                Play Again
            </button>
        `;
    }
}

function restartQuiz() {
    location.reload();
}