var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).keypress(function(event) { // event.key
     nextSequence();
});

$(".btn").click(function(e){
    console.log(this.id);
    //console.log(e.currentTarget.id);
    //userClickedPattern.push(e.currentTarget.id);
    userClickedPattern.push(this.id);
});

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