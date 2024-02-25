document.addEventListener('keyup', (event) => {    
    switch (event.keyCode) {
        case 87:
            var audio = new Audio("./sounds/crash.mp3");
            break;
            case 65:
                var audio = new Audio("./sounds/kick-bass.mp3");
                break;
                case 83:
                    var audio = new Audio("./sounds/snare.mp3");
                    break;
                    case 68:
                        var audio = new Audio("./sounds/tom-1.mp3");
                        break;
                        case 74:
                            var audio = new Audio("./sounds/tom-2.mp3");
                            break;
                            case 75:
                                var audio = new Audio("./sounds/tom-3.mp3");
                                break;
                                case 76:
                                    var audio = new Audio("./sounds/tom-4.mp3");
                                    break;    
        default:
            break;
    }     
    audio.play();
}); 

var drumButtonCount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtonCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnInnerHtml = this.innerHTML;
        switch (btnInnerHtml) {
            case "w":
                var audio = new Audio("./sounds/crash.mp3");        
                break;
                case "a":
                    var audio = new Audio("./sounds/kick-bass.mp3");
                    break;
                    case "s":
                        var audio = new Audio("./sounds/snare.mp3");
                        break;
                        case "d":
                            var audio = new Audio("./sounds/tom-1.mp3");
                            break;
                            case "j":
                                var audio = new Audio("./sounds/tom-2.mp3");
                                break;
                                case "k":
                                    var audio = new Audio("./sounds/tom-3.mp3");
                                    break;
                                    case "l":
                                        var audio = new Audio("./sounds/tom-4.mp3");
                                        break;    
            default:
                console.log(btnInnerHtml)
                break;
        }
        audio.play();     
    });
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