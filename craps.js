//The function where all the magic happens
function dice(){
    //Creates a variable that is somewhere from 1 to 6, like a 6-sided die.
    var diceNum1 = Math.floor((Math.random() * 6) + 1);
    //Creates a second "die" to be "rolled".
    var diceNum2 = Math.floor((Math.random() * 6) + 1);

    //A leftover document write that would output the dice results. Has been replaced with Switches for images
    //document.getElementById("dice").innerHTML = diceNum1 + " " + diceNum2;

    //The variable where the sum of the numbers rolled is stored
    var sum = diceNum1 + diceNum2

    //Displays the sum to the paragraph identified by "total"
    document.getElementById("total").innerHTML = "Total: " + sum;

    //Since if-else would get cluttered, I used a switch statement
    //This is for the first die and displays the result of the random, via image, to the "die1" <img>
    switch (diceNum1) {
        case 1:
            document.getElementById("die1").src = "one.png"
            break;
        case 2:
            document.getElementById("die1").src = "two.png"
            break;

        case 3:
            document.getElementById("die1").src = "three.png"
            break;

        case 4:
            document.getElementById("die1").src = "four.png"
            break;

        case 5:
            document.getElementById("die1").src = "five.png"
            break;

        case 6:
            document.getElementById("die1").src = "six.png"
            break;

        default:
            break;
    }

    //The same as the previous switch, but for "die2"
    switch (diceNum2) {
        case 1:
            document.getElementById("die2").src = "one.png"
            break;
        case 2:
            document.getElementById("die2").src = "two.png"
            break;

        case 3:
            document.getElementById("die2").src = "three.png"
            break;

        case 4:
            document.getElementById("die2").src = "four.png"
            break;

        case 5:
            document.getElementById("die2").src = "five.png"
            break;

        case 6:
            document.getElementById("die2").src = "six.png"
            break;

        default:
            break;
    }

    //If the total of the dice is 7 or 11, display "YOU LOSE" to the "result" paragraph
    if (sum == 7 || sum == 11) {
        document.getElementById("result").innerHTML = "YOU LOSE"
    }

    //else if the dice are equal AND even, display "CRAPS! YOU WON!"
    else if (diceNum1 == diceNum2 && diceNum1 % 2 == 0) {
        document.getElementById("result").innerHTML = "CRAPS! YOU WON!"
    }
    
    //In all other sitations, display "You pushed!"
    else {
        document.getElementById("result").innerHTML = "You pushed!"
    }
}
