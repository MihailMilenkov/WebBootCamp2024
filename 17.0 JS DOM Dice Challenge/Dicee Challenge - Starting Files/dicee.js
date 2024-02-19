var num1 = generateRandomDiceNumExcept(7);
var num2 = generateRandomDiceNumExcept(num1);
 document.querySelector(".img1").setAttribute("src", "./images/dice" +  num1 + ".png");
 document.querySelector(".img2").setAttribute("src", "./images/dice" +  num2 + ".png");
 document.querySelector("h1").innerHTML = chooseWinner(num1, num2);


function chooseWinner(num1, num2){
    if (num1 > num2) {
        return "🚩Player 1 Wins!"
    } else {
        return "Player 2 Wins!🚩"
    }
}

function generateRandomDiceNumExcept(exceptionNum){
    var num = Math.ceil(Math.random() * 6);

    if (num == exceptionNum) {
        num = generateRandomDiceNumExcept(exceptionNum);
    } 

     return num;
    
}