const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

let user = prompt("Choose rock, paper, or scissors");
let rng = Math.random();
if (rng < 0.34) {
    rng = rock;
} else if (rng <= 0.67) {
    rng = paper;
} else {
    rng = scissors;
}

function comparison(choice1, choice2) {
    if (choice1 === choice2) {
        return 'tie game!';
    }
    if (choice1 === rock) {
        if (choice2 === scissors) {
            return 'rock wins';
        }
    } else {
        return 'paper wins';
    }
    if (choice1 === paper) {
        if (choice2 === rock) {
            return 'paper wins';
        }
    } else {
        if (choice2 === scissors) {
            return 'scissors wins!';
        }
    }
    if (choice1 === scissors) {
        if (choice2 === rock) {
            return 'rock wins';
        } else {
            if (choice2 === paper) {
                return 'scissors wins';
            }
        }
    }
}

console.log("User choice", +user);
console.log("Computer choice : ", +rng);
console.log(comparison(user, rng));