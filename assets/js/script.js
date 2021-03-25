const startButton = document.getElementById("start-button")
var questEl = document.getElementById('test')
const answerEl = document.getElementById('end1')
const answerE = document.getElementById('test')
const highScore = document.getElementById('highscore')
const endGame= document.getElementById('end1') 
var timeCounter = 200
var mixedQuest, currentQuest
var score = 0
var wrong = 0
var  index = 0
var timerInterval;


timeStatus = document.getElementById("timer")





const question =[
    {
        title: "what does HTML mean?",
        answer: [
            { text: 'How Things Move Light', wrong: false},
            { text: ' Happy Time Meal lovers ', wrong: false},
            { text: 'Hyper Team Money Terms   ', wrong: false},
            { text: 'Hypertext Markup Language', correct: true},
        ],
        check:'Hypertext Markup Language',
    },

    {
     title: "What is a boolean?",
     answer:  [
         { text: 'Numbers 1 to 9 ', wrong: false},
         { text: 'string and number', wrong: false},
         { text: 'variables and Const', wrong: false},
         { text: 'true and false', correct: true},
     ],
     check:'true and false',
 },

 {
     title: "what does CSS mean?",
     answer: [
         { text: 'Cascading Style Sheets', correct: true},
         { text: 'Closing Serious Sentences', wrong: false},
         { text: 'Can See Sunrise        ', wrong: false},
         { text: 'Cancelled So Sorry', wrong: false},
     ],
     check:'Cascading Style Sheets',
 },

 {
    title: "what does HTML mean?",
    answer: [
        { text: 'How Things Move Light', wrong: false},
        { text: ' Happy Time Meal lovers ', wrong: false},
        { text: 'Hyper Team Money Terms   ', wrong: false},
        { text: 'Hypertext Markup Language', correct: true},
    ],
    check:'Hypertext Markup Language',
},

{
 title: "What is a boolean?",
 answer:  [
     { text: 'Numbers 1 to 9 ', wrong: false},
     { text: 'string and number', wrong: false},
     { text: 'variables and Const', wrong: false},
     { text: 'true and false', correct: true},
 ],
 check:'true and false',
},

{
 title: "what does CSS mean?",
 answer: [
     { text: 'Cascading Style Sheets', correct: true},
     { text: 'Closing Serious Sentences', wrong: false},
     { text: 'Can See Sunrise        ', wrong: false},
     { text: 'Cancelled So Sorry', wrong: false},
 ],
 check:'Cascading Style Sheets',
},
 

] 







function startQuiz(){
startButton.style.display = 'none'
mixedQuest = question.sort(()=>Math.random()- .5)
currentQuest = 0
setTime()
startQuizNxt()
}

function startQuizNxt(){
    reset()
    nextQuestion( mixedQuest[currentQuest])
}

function nextQuestion(){
    var curq = question[index]
    questEl.textContent = curq.title
    curq.answer.forEach(answer => {
        var button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('btn', 'mb-3')
        button.addEventListener('click', answerSel)
        answerE.appendChild(button)
    }) 
}


function answerSel(){
    if(answerE.matches("btn") !== true){
        timeCounter -= 10;
    }
    index++
    if(index === question.length){
        quizEnd()
    }
    else{
        nextQuestion()
    }
}


function quizEnd(){
    clearInterval(timerInterval);
    questEl.style.display = 'none'
    endGame.style.display = 'block'
      
     storeScr()
  
     
      }



      function storeScr() {
        var score = 200 - timeCounter
        var score1 = 200 - score
       var person = prompt("Please enter your name")
        if(person != null){
            answerEl.textContent = "hello " + person + " your score is " + score1   
            
            var user = { 
                Player: person,
                Score: score1,  
            };
            localStorage.setItem('user', JSON.stringify(user));
           
        }}
   




function reset(){
    while (answerE.firstChild){
        answerE.removeChild
        (answerE.firstChild)
    }
}


function setTime() {
   timerInterval = setInterval(function() {
    timeCounter--;
    timeStatus.textContent =" Time " + timeCounter;
    if(timeCounter <= 0) {
        quizEnd()
    timeCounter = score1;
    }}, 1000);

       
    
    }


   
 
  

 startButton.addEventListener("click", startQuiz);




  







