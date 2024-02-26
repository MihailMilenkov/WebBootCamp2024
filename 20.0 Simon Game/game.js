var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];
$("." + randomChosenColour).fadeOut(100).fadeIn(100)

var soundPath = `./sounds/${randomChosenColour}.mp3`;
playSound(soundPath);

function nextSequence(){
    return Math.round(Math.random() * 3);
}
function playSound(sound){
    var audio = new Audio(sound);
    audio.muted = true;
    //audio.play();
}