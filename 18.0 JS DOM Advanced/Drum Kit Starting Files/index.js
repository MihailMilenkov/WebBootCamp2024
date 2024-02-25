document.addEventListener('keyup', (event) => {    
    switch (event.keyCode) {
        case 87:
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            buttonAnimation(event.key);
            break;
            case 65:
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                buttonAnimation(event.key);
                break;
                case 83:
                    var audio = new Audio("./sounds/snare.mp3");
                    audio.play();
                    buttonAnimation(event.key);
                    break;
                    case 68:
                        var audio = new Audio("./sounds/tom-1.mp3");
                        audio.play();
                        buttonAnimation(event.key);
                        break;
                        case 74:
                            var audio = new Audio("./sounds/tom-2.mp3");
                            audio.play();
                            buttonAnimation(event.key);
                            break;
                            case 75:
                                var audio = new Audio("./sounds/tom-3.mp3");
                                audio.play();
                                buttonAnimation(event.key);
                                break;
                                case 76:
                                    var audio = new Audio("./sounds/tom-4.mp3");
                                    audio.play();
                                    buttonAnimation(event.key);
                                    break;    
        default:
            break;
        }
}); 

var drumButtonCount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtonCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnInnerHtml = this.innerHTML;
        switch (btnInnerHtml) {
            case "w":
                var audio = new Audio("./sounds/crash.mp3");   
                audio.play();
                buttonAnimation(btnInnerHtml);       
                break;
                case "a":
                    var audio = new Audio("./sounds/kick-bass.mp3");
                    audio.play();
                    buttonAnimation(btnInnerHtml);  
                    break;
                    case "s":
                        var audio = new Audio("./sounds/snare.mp3");
                        audio.play();
                        buttonAnimation(btnInnerHtml);  
                        break;
                        case "d":
                            var audio = new Audio("./sounds/tom-1.mp3");
                            audio.play();  
                            buttonAnimation(btnInnerHtml);
                            break;
                            case "j":
                                var audio = new Audio("./sounds/tom-2.mp3");
                                audio.play();  
                                buttonAnimation(btnInnerHtml);
                                break;
                                case "k":
                                    var audio = new Audio("./sounds/tom-3.mp3");
                                    audio.play();  
                                    buttonAnimation(btnInnerHtml);
                                    break;
                                    case "l":
                                        var audio = new Audio("./sounds/tom-4.mp3");
                                        audio.play();  
                                        buttonAnimation(btnInnerHtml);
                                        break;    
            default:
                break;
        }   
    });
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(() => {        
    activeButton.classList.remove("pressed");
    }, 100);
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}
function add(num1, num2){
    return num1 + num1;
}
function subtract(num1, num2){
    return num1 - num1;
}
function multiply(num1, num2){
    return num1 * num1;
}
function divide(num1, num2){
    return num1 / num1;
}