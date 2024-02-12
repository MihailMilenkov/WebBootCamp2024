ninetyNine();

function ninetyNine(){
    var startNum = 99;

    while(startNum > 0){
        console.log(startNum + " bottles of beer on the wall, "+ startNum + " bottles of beer.");
        startNum--;
        if (startNum == 0) {
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");            
        }
        else if (startNum == 1) {
            console.log("Take one down and pass it around, " + startNum + " bottle of beer on the wall.");
        } 
        else{
            console.log("Take one down and pass it around, " + startNum + " bottles of beer on the wall.");
        }
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
}