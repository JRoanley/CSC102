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

// Addition of a palindrome checker
function checkForPalindrome() {

    // Do palindrome check
    let inputField = document.getElementById("palindromeField");
    let results = document.getElementById("palindromeResults")
    //console.log(inputField);

    // example of palindrome
    let inputValue = inputField.value;
    let stringLength = inputValue.length;
    if (stringLength > 0) {
        
        // math for the palindrome check
        let iterationCount = Math.floor(stringLength/2);
        let lastCharacterIndex = inputValue.length - 1;
        let palindromeCheckResult = true;

        // Allowed to continue the plaindrome check
        for(let i = 0; i < iterationCount; i++) {
        if (inputValue[i] !== inputValue[lastCharacterIndex - i]) {
            console.log("NOT A PALINDROME!");
            results.innerHTML = "NOT A PALINDROME!"
            palindromeCheckResult = false;
            break;
          }
        }
        if (palindromeCheckResult) {
            console.log("This is a palindrome!!")
            results.innerHTML = "This is a palindrome!!"
        }
    }
}

// Addition of user varification
function userInfoValidation() {

    console.log("Checking User Info.");

    let firstNameField = document.getElementById("firstNameField");
    let lastNameField = document.getElementById("lastNameField");
    let zipField = document.getElementById("zipCode");
    let results = document.getElementById("userInfoResults");
    results.innerHTML = "";
    let firstNameValue = firstNameField.value;
    let lastNameValue = lastNameField.value;
    let zipValue = zipField.value;

    // concatenation, verify name length
    let firstLastName = firstNameValue + " " + lastNameValue;
    console.log(firstLastName); 
    
    // verify name length
    if (firstLastName.length > 20) {
        results.innerHTML = "WAY TOO LONG! NEEDS TO BE UNDER 20!"
        return; 
    }

    // verify zipcode value and checks that it is digit
    let zipRegex = /^\d{5}$/
    if (!zipRegex.test(zipValue)) {
    results.innerHTML = "WHOA WRONG FORMAT! NEEDS TO BE 5 DIGITS!"
    return;
    }

    let zipNumValue = parseInt(zipValue);
    console.log(zipValue);
    console.log("Input validated");
}
    

