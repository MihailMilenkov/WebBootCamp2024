var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameIsRunning = false;
var currentIndexClicked = 0;
var highScore = 0;

$(document).keypress(function(event) { // event.key
    if (!gameIsRunning) {
        $("h1").text("Level " + level);
        nextSequence();        
        gameIsRunning = true;        
    }
});

$(".btn").click(function(){
    userClickedPattern.push(this.id);
    playSound(`./sounds/${this.id}.mp3`);
    animatePress(this.id);
    checkAnswer(this.id);
});

function checkAnswer(currentLevel){
    if (gamePattern[currentIndexClicked] == currentLevel) { // check if last click is correct
        if(gamePattern.length == userClickedPattern.length){

            console.log("success");
        }
        currentIndexClicked++;
    }else{
        playSound(`./sounds/wrong.mp3`);
        level = 0;
        gameIsRunning = false;
        currentIndexClicked = 0;
        highScore = gamePattern.length;
        console.log("wrong");
    }    
}

function animatePress(currentColor){    
    var btn = $("#" + currentColor);

    $(btn).addClass("pressed");

    setTimeout(() => {
        $(btn).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    level ++;
    $("h1").text("Level " + level);
    var randomColorIndex =  Math.round(Math.random() * 3);

    var randomChosenColour = buttonColours[randomColorIndex];
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100)

    playSound(`./sounds/${randomChosenColour}.mp3`);
}
function playSound(sound){
    var audio = new Audio(sound);
    audio.play();
}