
// QUESTIONS ARRAY
var questionsArr = [
    {
        question: "Who is considered 'The People's Princess'?",
        answer: 'Princess Diana',
        options: [
            "Queen Elizabeth II", 
            "Princess Margaret", 
            "Kate Middleton", 
            "Princess Diana"
        ]
    },

    {
        question: "Who portrayed Princess Diana in the 2021 film 'Spencer' (Larraín)?",
        answer: 'Kristen Stewart',
        options: [
            'Kristen Stewart', 
            'Natalie Portman', 
            'Florence Pugh', 
            'Elizabeth Debicki'
        ]
    },

    {
        question: "In what year did Princess Diana marry Prince Charles?",
        answer: '1981',
        options: [
            '1983', 
            '1979', 
            '1981', 
            '1992'
        ]
    },

    {
        question: "Princess Diana held an auction of some of her dresses to raise money for what cause?",
        answer: "AIDS and cancer charities",
        options: [
            "AIDS and cancer charities", 
            "Children displaced by war", 
            "World hunger", 
            "Parkinson's disease"
        ]
    },

    {
        question: "Where did Princess Diana die?",
        answer: "Paris",
        options: [
            "London", 
            "Rome", 
            "New York City", 
            "Paris"
        ]
    }
]


var quizEl = document.querySelector('#quiz')
var choices = document.getElementById("quiz").querySelectorAll("div button")
var intervalId
var questionEl = document.createElement("p")
var optionsDiv = document.createElement("div")
var optionsBtn = document.createElement("button")
var q = 0 //QUESTION TRACKER
var numberCorrect = 0 //USER SCORE


function gradeQuiz() { 
    var score = Math.round((numberCorrect/questionsArr.length)*100)
    quizEl.innerHTML = ""
    quizEl.innerHTML = "Previous score: " + score +"%"
    localStorage.setItem('previous-score', score)

    q = 0
    numberCorrect = 0
    
    startSetUp()
}

function startSetUp( ){
    var startBtn = document.createElement("button")
    startBtn.setAttribute('id','start-quiz')
    startBtn.innerHTML = "Start Quiz"
    quizEl.appendChild(startBtn)

    startBtn.onclick = function() {
        quizEl.removeChild(startBtn) //REMOVE THE START BUTTON AFTER GAME BEGINS
        newQuestion() //BRINGS IN NEW QUESTIONS
        q++ //QUESTION TRACKER, IDK WHY IT WORKS, BUT IT DOES
    }
}
startSetUp()

function startWithScore() {
    var previousScore = localStorage.getItem('previous-score')
    if (previousScore) {
        var prevoiusScoreEl = document.createElement("p")
        
        quizEl.appendChild(prevoiusScoreEl)
    } else {
        startSetUp()
    }
}
startWithScore()

function newQuestion() {  
    quizEl.innerHTML = ""
    optionsDiv.innerHTML = ""
    
    //LOAD QUESTION
    questionEl.textContent = questionsArr[q].question 
    quizEl.appendChild(questionEl)

    //LOAD ANSWERS
    for (let i = 0; i < questionsArr[q].options.length; i++) {
        var optionsBtn = document.createElement("button")

        optionsBtn.textContent = questionsArr[q].options[i]

        optionsDiv.appendChild(optionsBtn)

        optionsBtn.addEventListener('click', function(e){
            if (e.target.innerHTML === questionsArr[q].answer){
                numberCorrect++
            } else {
                endOfRound()
            }
        })
    }
    quizEl.appendChild(optionsDiv)

    //LOAD TIMER
    var timerEl = document.createElement("p")
    timerEl.textContent = 30
    quizEl.appendChild(timerEl)
    

    //COUNTDOWN
    var intervalId = setInterval(function(){
        timerEl.textContent = Number(timerEl.textContent) - 1
        if (timerEl.textContent === -1) {
            endOfRound()
        }
    }, 1000)
}

optionsDiv.addEventListener('click', function(e){
    if (e.target.textContent === questionsArr[q].answer){
        numberCorrect++
        endOfRound()
        q++
    } else {
        endOfRound()
    }

})

function endOfRound(){
    clearInterval(intervalId)
    q++
    if (q === questionsArr.length){
        gradeQuiz()
    } else {
        newQuestion()
    }
}


