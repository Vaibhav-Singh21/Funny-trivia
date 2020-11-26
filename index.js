
const chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question(chalk.hex('#FFFFFF').bold("whats your Name? "));

console.log(chalk.white.bgCyan.bold("Welcome!! " +userName+ " To the Funniest Trivia Game Ever."));
//console.log("T&C: 👀   please give answers in all lowercase")
console.log("**********************🟡 🟡 🟡 🟡 🟡 *********************");
var score = 0;
//play function
function play(questions, answer){
  var userAns = readlineSync.question(questions);

  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.hex('#448AFF').bold("Correct ✔"));
    score++;
  }else{
    console.log(chalk.hex('#448AFF')("wrong ❌"));
    score--;
  }
  console.log("your Score: "+ score);
  console.log("----------------");
}

//play("where do you live? ", "Lucknow");
var questions = [{
  question: chalk.hex('#BDBDBD').bold("What has to be broken before it can be used?"),
  answer: "egg"
},{
  question: chalk.hex('#BDBDBD').bold("What does come down but never goes up?"),
  answer: "rain"
},{
  question: chalk.hex('#BDBDBD')("Who was the first Twitter user to reach 20 million followers?"),
  answer: "lady gaga"
},{
  question: chalk.hex('#BDBDBD')("Which word is spelt wrong in every dictionary?"),
  answer: "wrong"
},{
  question: chalk.hex('#BDBDBD')("which Iphone series did Apple Launched recently ?"),
  answer: "Iphone 12"
}];

//loops
j = 1;
for(var i =0; i<questions.length; i++){
  console.log(chalk.hex('#009688').bold("QUESTION NO."+ j));
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  j++;
  }

  if(score<3)
  console.log("Your Total Score: "+ chalk.hex('#448AFF').bold(score)+"/5.");
  else{
    console.log("Great!!, Your Total Score:"+ chalk.hex('#448AFF').bold(score+ "/5"));
}
console.log(chalk.hex('#009688').bold("THANK YOU FOR PLAYING"));
