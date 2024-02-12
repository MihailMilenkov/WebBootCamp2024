prompt("Your name, please:");
prompt("Your crush's name, please:");
var score = Math.random() * 100;
score = Math.round(score);
var message = "";
if(score < 50){
    message = ", thats too bad."
}
else {
    message = ", thats great."
}
alert("Your love score is " + score + message);