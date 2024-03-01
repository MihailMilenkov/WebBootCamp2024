var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).keypress(function(event) { // event.key
     nextSequence();
});

$(".btn").click(function(){
    //console.log(this.id);
    //console.log(e.currentTarget.id);
    //userClickedPattern.push(e.currentTarget.id);
    userClickedPattern.push(this.id);
    playSound(`./sounds/${this.id}.mp3`);
    animatePress(this.id);
});

function animatePress(currentColor){    
    var btn = $("#" + currentColor);
    
    $(btn).addClass("pressed");

    setTimeout(() => {
        $(btn).removeClass("pressed");
    }, 100);
    console.log(1);
}

function nextSequence(){
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