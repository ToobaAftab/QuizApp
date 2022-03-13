    var questions = [
    {
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 10
    }, 
    {
        question: "What is 6*10?",
        choices: [10, 30, 60, 80, 100],
        correctAnswer: 60
    }, 
    {
        question: "What is 8*6?",
        choices: [34, 72, 48, 80, 99],
        correctAnswer: 48
    }, 
    {
        question: "What is 9*4?",
        choices: [36, 55, 69, 77, 80],
        correctAnswer: 36
    },
    {
        question: "What is 11*4?",
        choices: [33, 55, 88, 44, 99],
        correctAnswer: 44
    }
];
var index = 0;
var totalScore = 0;
const questionText = document.querySelector(".question_text");
const choicesList = document.querySelector(".choices_list");
const pendingQuestions = document.querySelector(".pendingQuestions");

document.getElementById("next").setAttribute("onclick","onNextClick()");
pendingQuestions.textContent = index+1;

showQuestions(index);
// console.log(questions);

function showQuestions(index){

    let displayQuestion = '<span>' + "Q" + (index+1) + "." + questions[index].question +'</span>';
    let displayChoices = '<div class="choice"><span>'+ questions[index].choices[0] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[1] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[2] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[3] +'</span></div>'
    + '<div class="choice"><span>'+ questions[index].choices[4] +'</span></div>';
    questionText.innerHTML = displayQuestion;
    choicesList.innerHTML = displayChoices;

    const selectedChoices = document.querySelectorAll(".choice");
    console.log (selectedChoices);
    for(i=0; i < selectedChoices.length; i++){
        selectedChoices[i].setAttribute("onclick", "selectedUserChoice(this)"); 
    }
    
}

function selectedUserChoice(answer)
{
    is_selected = true;
    if(is_selected == true){
        answer.classList.add("selected");
        var userAnswer = answer.textContent;
        var actualAnswer = questions[index].correctAnswer;
        var allChoices = questions[index].choices.length;
        for(i=0; i < allChoices; i++){
            choicesList.choices[i].classList.add("disabled");
            //console.log(questions[index].choices[i].classList.Add('disbale'));
        }
        
    }
    
    if (userAnswer==actualAnswer){
        totalScore++;
    }
    console.log(answer);

}

function onNextClick(){
    index++;
    console.log(index+1);
    if (index < questions.length)
    {
        showQuestions(index);
        pendingQuestions.textContent = index+1;

    }
    else
    {
        console.log(totalScore);
    }
}