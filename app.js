let userScore=0;
let compScore=0;
let msg = document.querySelector("#para");
let userPara= document.querySelector("#user-score");
let compPara= document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener( "click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});

const genCompChoice = ()=>{
    const options = ["rock", "paper","scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];

}



const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    if(compChoice===userChoice){
        console.log("Draw game");
        msg.innerText = "Game Draw";
        msg.style.backgroundColor="black";
        
    }
    if(compChoice==="rock"&& userChoice==="scissor" || compChoice==="paper"&& userChoice==="rock" || compChoice==="scissor"&& userChoice==="paper"){
        console.log("you loose ");
        msg.innerText = "you loose";
        msg.style.backgroundColor= "red";
        compScore++;
        compPara.innerText=compScore;
    }
    if(compChoice==="rock" && userChoice==="paper" || compChoice==="paper"&& userChoice==="scissor"||compChoice==="scissor"&& userChoice==="rock"){
        console.log("you won ");
        msg.innerText = `you won`;
        msg.style.backgroundColor= "green";
        userScore++;
        userPara.innerText=userScore;
    }
    
}



