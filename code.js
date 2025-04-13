// Generates Game Page at the top of the console page
console.log("Game Page");

// Changes the initial header after click 
function updateText() {
    document.getElementById("heading").innerHTML = "Roll Your Dice!";
}

function rollDice() {
    // Will generate result text on game page
    let results = document.getElementById("results");
    // Generates random number between 1 and 6 and store in variable     
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    // Combines two strings and outputs the value in the console page
    console.log("Die 1: " + die1);
    console.log("Die 2: " + die2);
    // Will be the conditions of winning
    let sum = die1 + die2;
    // Evaluation of values to make sure conditions are met, OR operator
    if (sum == 7 || sum == 11) {
    console.log("You Win!")
    results.innerHTML = "You Win!";    
    }
    // AND operators
    else if (die1 == die2) {
    console.log("Doubles! You Win!")
    results.innerHTML = "Doubles! You Win!";
    }
    else {
    console.log("You Lose!")
    results.innerHTML = "You Lose!";
    }
}

    

