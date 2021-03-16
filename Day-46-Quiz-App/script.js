const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')
const quizQuestions = [
    {
        question: "Which Pokemon type is weak against it's own type?",
        a: 'Dragon',
        b: 'Normal',
        c: 'Fighting',
        d: 'Psychic',
        correct: 'a'
    },
    {
        question: "Who was the voice actor of Detective Pikachu in the eponymous movie?",
        a: 'Matthew Mercer',
        b: 'Jaden Smith',
        c: 'Ryan Reynolds',
        d: 'Justine Long',
        correct: 'c'
    },
    {
        question: 'Who is the Champion of the Sinnoh League?',
        a: 'Blue',
        b: 'Lance',
        c: 'Wallace',
        d: 'Cynthia',
        correct: 'd'
    },
    {
        question: "Which was the first Pokemon game to introduce gender option for the player?",
        a: 'Ruby & Sapphire',
        b: 'Fire Red & Leaf Green',
        c: 'Crystal',
        d: 'Red & Blue',
        correct: 'c'
    },
]

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizQuestions[currentQuiz]
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


//removes the checked item when the user hits submit
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
    if (answer) {
        if (answer === quizQuestions[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if (currentQuiz < quizQuestions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizQuestions.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})