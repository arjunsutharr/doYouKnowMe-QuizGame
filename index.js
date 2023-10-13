var chalk = require("chalk");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log(chalk.hex('#3085C3')("Welcome my dear " + userName + ". \nLet's see how much you know about me. "));
console.log(chalk.hex('#662549')(" \nLet's play a game."));

var score = 0;


function gamePlay(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() ===  answer.toUpperCase()){
    console.log(chalk.grey("You answer: " + answer + "."));
    console.log(chalk.green("You are right. "));
    score++;
  } else{
    console.log(chalk.grey("You answer: " + answer + "."));
    console.log(chalk.red("You given an wrong answer. "));
  }

  console.log(chalk.hex('#EE9322')("Your current score is: " + score + "\n"));
}

var questions = [
  {
    question: 
    chalk.grey(
` 
1. Where do i live? 
a: Assam
b: Kashmir
c: Rajasthan
`),    
    answer:"c"
    },
    {
    question: chalk.grey( 
`
2. How many times do I do yoga in a week? 
a: five days in a week
b: everyday
c: once in a week
`),
    answer: "b"
    },
    {
    question: chalk.grey(
`
3. What type of food I prefer? 
a: Homemade
b: restrofood
c: streetfood
`),
    answer: "a"
    },
    {
    question: chalk.grey( 
`
4. Are we good friends?
a: Nope
b: Yes
c: Maybe
`),
    answer:"b"
    },
    {
    question: chalk.grey(
`
5. what color clothes I prefer?
a: Light Color
b: Dark Color
c: Dipends on situation
`),
    answer: "c"
    }
]



for(var i = 0; i < questions.length; i++){
  var ques = questions[i];
  gamePlay(ques.question , ques.answer);
}


console.log("your total score is: " + score + "/5 \n");

var highScoreList = [
  {
  name: "Keshav ",
  score: 5
  },
  { 
  name: "Leela ",
  score: 3
  },
  { 
  name: "Chintan ",
  score: 4 
  },
  {
    name: "You",
    score: score
  }
]

function sortHighScore(highScores){
    return highScores.sort((a, b) => {
        return b.score - a.score;
    });
}

var sortedHighScoreList = sortHighScore(highScoreList);

console.log(chalk.yellowBright("Scoreborad: "));
for(var highScor of sortedHighScoreList){
    console.log(highScor.name + ": " + highScor.score);
}

console.log(chalk.hex('#662549')("\n -----Thank you for playing-----"));