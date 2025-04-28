// you can write js here
console.log('exo-3');
var playerInput = prompt("Your choice ( rock, paper, scissors) ?");
console.log(" Player's choice " + playerInput);

function getPlayerChoice(playerInput) {

    return playerInput.toLowerCase();



}

var PlayerChoice = getPlayerChoice(playerInput);
console.log("player's choie" + PlayerChoice);


var playerInput = prompt(" your choice (roche', papier, ou ciseaux)?");
function getPlayerChoice(playerInput) {

    if (playerInput === 1) {

        console.log("afficher player choice :" + playerInput);

    } else {

        console.log(" Erreur dans le console");

    }

}

function getComputerChoice(){

var randomNum= Math.floor(Math.random() * 3    );




if (randomNum ===0){

    return "rock";

}else if ( randomNum ===1){

return "paper";

}else if (randomNum ===2){

return "scissors";

}

}
 
function findWinner(playerChoice, computerChoice){
if ( playerChoice === computerChoice){
return "Tied";

} else if ((playerChoice === "rock" && computerChoice === "scissors") ||
( playerChoice === " paper" && computerChoice === " rock" )||
( playerChoice === " scissors" && computerChoice === "paper")){

return " won";


}else {

    return " lost";
}

var resultat=findWinner (playerChoice, computerChoice);
console.log(" Résultat" + resultat);


}

function findWinner(playerChoice, computerChoice){
    if ( playerChoice === computerChoice){
    return "Tied";
    
    } 
     if (playerChoice === "rock") {
        if (computerChoice === "ciseaux"){
            return "Won";
        } else {
            return "Lost";
        }
    }
    if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "Won";
        } else {
            return "Lost";
        }
    }





    var resultat=findWinner (playerChoice, computerChoice);
    console.log(" Résultat" + resultat);
    
    
    }
    function findWinner(playerChoice, computerChoice) {
        // Cas d'égalité
        if (playerChoice === computerChoice) {
            return "Tied";
        }
    
        // Le joueur choisit "rock"
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                return "Won";
            } else {
                return "Lost";
            }
        }
    
        // Le joueur choisit "paper"
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                return "Won";
            } else {
                return "Lost";
            }
        }
    
        // Le joueur choisit "scissors"
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                return "Won";
            } else {
                return "Lost";
            }
        }
    }

    function playGame(){
var playerInput = prompt("Votre choix (rock, paper, scissors ou... bomb 💣)?");

var uChoice= getPlayerChoice(playerInput);
var computerChoice = getComputerChoice();
console.log("Joueur a choisi : " + uChoice);
console.log("Ordinateur a choisi : " + computerChoice);

console.log("Résultat : " + findWinner(uChoice, computerChoice));




    }                        
    playGame();