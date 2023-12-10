let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const mssg = document.querySelector("#mssg")
const uscore = document.querySelector("#userScore")
const cscore = document.querySelector("#compScore")

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3)
    return options[randIdx];
}

const draw = ()=>{
    console.log("It's a draw , Play again !")
    mssg.innerText = "Draw Game"
}
let userWin=true
const playGame = (userChoice)=>{
    
    console.log("you chose " , userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer chose " , compChoice)
    
    if(userChoice === compChoice){
        draw();
    }
    else{

        if(userChoice==="rock"){
            userWin = compChoice === "scissors" ? true : false;
            console.log(userWin)
        }
        else if (userChoice==="paper"){
            userWin = compChoice === "rock" ? true : false;
            console.log(userWin)
        }
    }
        result();
    
}

const result = (userChoice,compChoice)=>{
    if(userWin){
        userScore++
        uscore.innerText = userScore
        console.log("You scored : ",userScore)
        mssg.innerText = "You win"
    }
    else{
        compScore++
        cscore.innerText = compScore
        console.log("Computer scored : ",compScore)
        mssg.innerText= "You lose"
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
});



