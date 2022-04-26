const QuizDB = [
    {
        question: "Q1: HTML stands for-",

        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"

    },
    {
        question: "Q2:The correct sequence of HTML tags for starting a webpage is -",

        a: " Head, Title, HTML, body",
        b: " HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: " HTML, Head, Title, Body",
        ans: "ans3"
    },
    {

        question: "Q3: Which of the following element is responsible for making the text bold in HTML",

        a: "<pre>",
        b: "<a>",
        c: " <b>",
        d: " <br> ",
        ans: "ans3"
    },
    {

        question: "Q1: HTML stands for-",

        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "ans3"
    },
]
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const Submit = document.querySelector("#Submit");
const Answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

let questionCount = 0;
let score = 0;
const loardQuestion = () => {


    const questionlist = QuizDB[questionCount];

    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;

}
loardQuestion();// call the function

const getcheckedAns = () => {
    let answer;
    Answers.forEach((curntElement) => {
        if (curntElement.checked)
            answer = curntElement.id;
    
    });
    return answer;
}

Submit.addEventListener("click", () => {
    const checkedAns = getcheckedAns();
    console.log(checkedAns)
    if (checkedAns == QuizDB[questionCount]); {
        score++;
    }
    questionCount++
    if (questionCount < QuizDB.length) {
        loardQuestion();

    } else {
        showscore.innerHTML=`
        <h3> you Scored ${score}/${QuizDB.length}</h3>
<button class="btn" onclick="location.relaod()"></button>
        `;
        showscore.classList.remove("scoreaArea")
    }
    })  