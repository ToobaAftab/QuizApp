    var questions = [
    {
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 10,
        userAnswer: -1
    }, 
    {
        question: "What is 6*10?",
        choices: [10, 30, 60, 80, 100],
        correctAnswer: 60,
        userAnswer: -1
    }, 
    {
        question: "What is 8*6?",
        choices: [34, 72, 48, 80, 99],
        correctAnswer: 48,
        userAnswer: -1
    }, 
    {
        question: "What is 9*4?",
        choices: [36, 55, 69, 77, 80],
        correctAnswer: 36,
        userAnswer: -1
    },
    {
        question: "What is 11*4?",
        choices: [33, 55, 88, 44, 99],
        correctAnswer: 44,
        userAnswer: -1
    }
];
var questionIndex = 0;
var totalScore = 0;
var userAnswer;
let counter;
let timerValue = 15;
const questionText = document.querySelector(".question_text");
const choicesList = document.querySelector(".choices_list");
const pendingQuestions = document.querySelector(".pendingQuestions");
const timerText = document.querySelector(".time-left");
const timerSeconds = document.querySelector(".seconds");

document.getElementById("next").setAttribute("onclick","onNextClick()");
pendingQuestions.textContent = questionIndex+1;

showCurrentQuestion(questionIndex);
startTimer(timerValue);

function prepareChoices(questionIndex) {
    const question = questions[questionIndex];
    const choices = question.choices;
    let newChoices = '';
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];
        newChoices = newChoices + `<div class="choice ${index === question.userAnswer? 'selected' :''}"><span>${choice}</span></div>`;
    }
    return newChoices
}

function showCurrentQuestion(questionIndex){
    const displayQuestion = '<span>' + "Q" + (questionIndex+1) + "." + questions[questionIndex].question +'</span>';
    const displayChoices = prepareChoices(questionIndex)
    questionText.innerHTML = displayQuestion;
    choicesList.innerHTML = displayChoices;
    const selectedChoices = document.querySelectorAll(".choice");
    for(i=0; i < selectedChoices.length; i++){
        selectedChoices[i].setAttribute("onclick", `selectedUserChoice(${i})`); 
    }
}

function selectedUserChoice(choosedChoiceIndex)
{
  console.log('selectedUserChoice==>',choosedChoiceIndex);
    var currentQuestion = questions[questionIndex];
    userAnswer = currentQuestion.choices[choosedChoiceIndex];
    currentQuestion.userAnswer = choosedChoiceIndex;

    showCurrentQuestion(questionIndex);
}

function calculateScore(){
    
    var actualAnswer = questions[questionIndex].correctAnswer;
    if (userAnswer === actualAnswer){
        totalScore++;   
    }
}

function onNextClick(){
    
    calculateScore();
    questionIndex++;
    if (questionIndex < questions.length)
    {
        showCurrentQuestion(questionIndex);
        pendingQuestions.textContent = questionIndex+1;

    }
    else if (questionIndex == questions.length)
    {
        displayTotalScore();
    }
}

function displayTotalScore(){
    clearInterval(counter);
    displayingTotalScoreBlock = document.querySelector(".innerContainer");
    displayingTotalScoreBlock.innerHTML = `<div class="totalScore">
    <h3>Your Total Score</h3><span>${totalScore}</span></div>
    <div class="final_buttons"><button class="restart" onclick="onRestartClick()">Restart Quiz</button></div>`;
}

function settingEndQuizButtons(){
    const restartQuiz = document.querySelector("restart");
    const quitQuiz = document.getElementById("quit");
    restartQuiz.setAttribute("onclick","onRestartClick()");
}

function onRestartClick(){
    window.location.reload();
    showCurrentQuestion(questionIndex);
}

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timerSeconds.textContent = time;
        time--;
        if (time<9){
            let addZero = timerSeconds.textContent;
            timerSeconds.textContent = "0" + addZero;
        }
        if (time<0){
            clearInterval(counter);
            // timerText.textContent = "Time Finished";
            timerText.innerHTML = "Time Finished";
            displayTotalScore();
        }
    }
}