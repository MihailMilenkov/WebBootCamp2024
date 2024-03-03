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
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    // check if last click is correct
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { 
        // check if the sequence is correct
        if(gamePattern.length == userClickedPattern.length){
            // update highscore
            if(gamePattern.length > highScore){
                highScore = gamePattern.length;
            }

            setTimeout(function () {
                nextSequence();
            }, 1000;
        }

        currentIndexClicked++;        
    }else{
        playSound(`./sounds/wrong.mp3`);
        level = 0;
        gameIsRunning = false;
        currentIndexClicked = 0;
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
    userClickedPattern = [];
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