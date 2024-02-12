var score = Math.random() * 100;
score = Math.round(score);
var message = "";
if(score == 100){
    message = ", thats wonderful."
}
else if(score < 50){
    message = ", thats too bad."
}
else {
    message = ", thats great."
}
console.log("Your love score is " + score + message);