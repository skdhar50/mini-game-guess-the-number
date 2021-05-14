let body = document.getElementsByTagName("body")[0];
let inputNumber = document.getElementById("number");
let checkBtn = document.getElementById("check-btn");
let scoreCount = document.getElementById("score-count");
let highest = document.getElementById("highest-score");
let hiddenNumber = document.querySelector(".hidden-number");
let playAgain = document.querySelector(".play-again");
let message = document.getElementById("message");
let randomNumber = Math.floor(Math.random()*20) + 1;

let score = 20;
let highestScore = 0;


function setMessage(text) {
    message.textContent = text;
}

function resetScore() {
    body.style.background = "black";
    hiddenNumber.textContent = "?";
    inputNumber.value = 0;
    message.textContent = "";
    scoreCount.textContent = "20";
    score = 20;
    randomNumber = Math.floor(Math.random()*20) + 1;
}

function checkGuess() {
    if(parseInt(inputNumber.value) === randomNumber) {
        hiddenNumber.textContent = randomNumber;
        body.style.background = "green";
        setMessage("You Win!!!");
        if(score > highestScore) {
            highestScore = score;
            highest.textContent = highestScore;
        }
    }
    else {
        scoreCount.textContent = --score;
        if(score === 0) {
            body.style.background = "red";
            setMessage("You Lose!!")
        }
        else {
            if(parseInt(inputNumber.value) < randomNumber) {
                setMessage("Too Low!");
            }
            else {
                setMessage("Too High!!");
            }
        }
    }
}

checkBtn.addEventListener('click', checkGuess);
playAgain.addEventListener('click', resetScore);
