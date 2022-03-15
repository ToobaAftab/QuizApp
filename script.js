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
const questionText = document.querySelector(".question_text");
const choicesList = document.querySelector(".choices_list");
const pendingQuestions = document.querySelector(".pendingQuestions");

document.getElementById("next").setAttribute("onclick","onNextClick()");
pendingQuestions.textContent = questionIndex+1;

showCurrentQuestion(questionIndex);

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
    console.log (selectedChoices);
    for(i=0; i < selectedChoices.length; i++){
        selectedChoices[i].setAttribute("onclick", `selectedUserChoice(${i})`); 
    }
}

function selectedUserChoice(choosedChoiceIndex)
{
  console.log('selectedUserChoice==>',choosedChoiceIndex)
    //answer.classList.add("selected");
    var currentQuestion = questions[questionIndex];
    var actualAnswer = currentQuestion.correctAnswer;
    var userAnswer = currentQuestion.choices[choosedChoiceIndex];
    currentQuestion.userAnswer = choosedChoiceIndex;
    // var allChoices = currentQuestion.choices.length;

    // for (let i=0; i<=allChoices; i++){
    //     if (userAnswer==currentQuestion.choices[i]){
    //         currentIndex = i;
    //         break;
    //     }
    // }
    showCurrentQuestion(questionIndex);
    
    // while (currentQuestion.choices.length){
    //     showCurrentQuestion(questionIndex);
    //     console.log(currentQuestion.choices);
    // }
    if (userAnswer === actualAnswer){
        totalScore++;   
    }

}

function onNextClick(){
    index++;
    console.log(index+1);
    if (index < questions.length)
    {
        showCurrentQuestion(index);
        pendingQuestions.textContent = index+1;

    }
    else
    {
        console.log(totalScore);
    }
}