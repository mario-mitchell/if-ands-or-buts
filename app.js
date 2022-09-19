// Write a program called lock-box.js that stores the pin code to the lock box in a variable at the top of your program (i.e.: const pinCode = '1234';).

// const prompt = require('prompt-sync')({sigint: true});

// // let pinCode = 6633

// let pinCode = Number(prompt("Enter your 4 digit pin code: "));

//  if (pinCode === 6633){
//      console.log("Lets do a bank next!");
//  } else if (pinCode !== 6633){
//     console.log("You didn't make the team.!")
// }


//Rock Paper Scissors Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.


const prompt = require('prompt-sync')({sigint: true});
let player1 = (prompt("Player 1:Enter Rock, Paper, or Scissors: "));
let player2 = (prompt("Player 2:Enter Rock, Paper, or Scissors: "));
console.log("player1 Choice: " + player1);
console.log("player2 Choice: " + player2);

if (player1 === "paper" && player2 === "rock"){
    console.log("paper beats rock: player 1 wins")
}

if (player1 === "paper" && player2 === "scissors"){
    console.log("scissors beats paper: player 2 wins")
}

if (player1 === "paper" && player2 === "paper"){
    console.log("TIE LOSERS!")
}
if (player1 === "rock" && player2 === "rock"){
    console.log("TIE LOSERS!")
}
if (player1 === "rock" && player2 === "paper"){
    console.log("paper beats rock: player 2 wins")
}
if (player1 === "rock" && player2 === "scissors"){
    console.log("rock beats scissors: player 1 wins")
}
if (player1 === "scissors" && player2 === "paper"){
    console.log("scissors beats paper: player 1 wins")
}
if (player1 === "scissors" && player2 === "scissors"){
    console.log("TIE LOSERS!")
}
if (player1 === "scissors" && player2 === "rock"){
    console.log("rock beats scissors: player 2 wins")
}