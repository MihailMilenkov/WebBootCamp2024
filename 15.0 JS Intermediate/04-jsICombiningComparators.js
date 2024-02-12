var score = Math.random() * 100;
score = Math.round(score);
var message = "";
if(score < 50){
    message = ", thats too bad."
}
else if(score >= 50 && score < 100){
    message = ", thats great."
}
else {
    message = ", thats wonderful."
}
console.log("Your love score is " + score + message);