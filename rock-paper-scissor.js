let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreBoarrd_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

var max=prompt("Enter the maximum points you want to play for");

function win(userChoice,computerChoice)
{
    userScore++;
    if(userScore==max)
    {
        window.open("result_user.html","_self");
    }
    userScore_span.innerHTML = userScore;
    computerChoice=computerChoice.toUpperCase();
    result_div.innerHTML="Computer Choice is '"+computerChoice+"'. So you win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow') },400);
    
}

function lose(userChoice,computerChoice)
{
    compScore++;
    if(compScore==max)
    {
        window.open("result_comp.html","_self");
    }
    compScore_span.innerHTML = compScore;
    computerChoice=computerChoice.toUpperCase();
    result_div.innerHTML="Computer Choice is '"+computerChoice+"'. So computer Wins!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},400);
}

function draw(userChoice,computerChoice)
{
    computerChoice=computerChoice.toUpperCase();
    result_div.innerHTML="Computer Choice is '"+computerChoice+"'. So its a Draw";
    /*document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},400);*/
}

function getComputerChoice()
{
    const choices=["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)]; 
}

function game(userChoice)
{
    const computerChoice=getComputerChoice();
    switch( userChoice + computerChoice ){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice,computerChoice);
            break;
        
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            lose(userChoice,computerChoice);
            break;
        
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
    game("rock");
    })

    paper_div.addEventListener('click', function(){
    game("paper");
    })

    scissor_div.addEventListener('click', function(){
    game("scissor");
    })
}

main();