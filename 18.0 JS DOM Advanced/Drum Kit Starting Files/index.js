var document = "index.html";
var drumButtonCount = document.querySelectorAll(".drum").length;

// for (var i = 0; i < drumButtonCount; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);    
// }
document.addEventListener('keyup', (event) => {    
    switch (event.keyCode) {
        case 87:
            handleClickW();
            break;
            case 65:
                handleClickA();
                break;
                case 83:
                    handleClickS();
                    break;
                    case 68:
                        handleClickD();
                        break;
                        case 74:
                            handleClickJ();
                            break;
                            case 75:
                                handleClickK();
                                break;
                                case 76:
                                    handleClickL();
                                    break;    
        default:
            break;
    }    
    // alert(event.keyCode);
  }); 
document.querySelectorAll(".drum")[0].addEventListener("click", handleClickW);  
document.querySelectorAll(".drum")[1].addEventListener("click", handleClickA);  
document.querySelectorAll(".drum")[2].addEventListener("click", handleClickS);  
document.querySelectorAll(".drum")[3].addEventListener("click", handleClickD);  
document.querySelectorAll(".drum")[4].addEventListener("click", handleClickJ);  
document.querySelectorAll(".drum")[5].addEventListener("click", handleClickK);  
document.querySelectorAll(".drum")[6].addEventListener("click", handleClickL);  

function handleClickW(){
    createAndPlay("w");
}
function handleClickA(){
    createAndPlay("a");
}
function handleClickS(){
    createAndPlay("s");
}
function handleClickD(){
    createAndPlay("d");
}
function handleClickJ(){
    createAndPlay("j");
}
function handleClickK(){
    createAndPlay("k");
}
function handleClickL(){
    createAndPlay("l");
}

function createAndPlay(button){
    switch (button) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3")
            break;
            case "a":
                var audio = new Audio("./sounds/kick-bass.mp3")
                break;
                case "s":
                    var audio = new Audio("./sounds/snare.mp3")
                    break;
                    case "d":
                        var audio = new Audio("./sounds/tom-1.mp3")
                        break;
                        case "j":
                            var audio = new Audio("./sounds/tom-2.mp3")
                            break;
                            case "k":
                                var audio = new Audio("./sounds/tom-3.mp3")
                                break;
                                case "l":
                                    var audio = new Audio("./sounds/tom-4.mp3")
                                    break;    
        default:
            break;
    }
    
    audio.play();
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