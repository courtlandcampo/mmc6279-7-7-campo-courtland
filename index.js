
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

//START BUTTON
var quizEl = document.querySelector('#quiz')


var startBtn = document.createElement("button")
startBtn.setAttribute('id','start-quiz')
startBtn.innerHTML = "Start Quiz"
quizEl.appendChild(startBtn)


var questionEl = document.createElement("p")
var optionsDiv = document.createElement("div")
var optionsBtn = document.createElement("button")

//QUESTION TRACKER
var q = 0

//USER SCORE
numberCorrect = 0

//TIMER


startBtn.onclick = function () {

    quizEl.removeChild(startBtn) //REMOVE THE START BUTTON AFTER GAME BEGINS
    
    //LOAD QUESTION
    questionEl.textContent = questionsArr[q].question 
    quizEl.appendChild(questionEl)

    //LOAD ANSWERS
    for (let i = 0; i < questionsArr[q].options.length; i++) {
        var optionsBtn = document.createElement("button")

        optionsBtn.textContent = questionsArr[q].options[i]

        optionsDiv.appendChild(optionsBtn)
    }
    quizEl.appendChild(optionsDiv)

    //LOAD TIMER
    var timerEl = document.createElement("p")
    timerEl.textContent = 5
    quizEl.appendChild(timerEl)
    

    //COUNTDOWN
    var intervalId = setInterval(function(){
        timerEl.textContent = Number(timerEl.textContent) - 1
        if (timerEl.textContent === '0') {
            clearInterval(intervalId)
            newQuestion()
            q++
        }
    }, 1000)

}


/*quizEl.addEventListener('click', function(e){

    console.log(questionsArr[q].answer)
    if (e.target.innerHTML === questionsArr[q].answer){
        console.log('woo')
        numberCorrect++
        newQuestion()
        q++
    } else {
        console.log('nope')
        newQuestion()
        q++
    }
}) */

 function newQuestion() {  
    quizEl.innerHTML = ""
    
    questionEl.textContent = questionsArr[q].question
    quizEl.appendChild(questionEl)

    for (let i = 0; i < questionsArr[q].options.length; i++) {
        var optionsBtn = document.createElement("button")

        optionsBtn.textContent = questionsArr[q].options[i]

        optionsDiv.appendChild(optionsBtn)
    }
    quizEl.appendChild(optionsDiv) 
} 
