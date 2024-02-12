/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

// https://stanford.edu/~cpiech/karel/ide.html

function main(){
    goAroundTheField();
    putBeeper();
    moveAndPut();
    moveAndPut();
    moveAndPut();
    moveAndPut();
 }
 function moveAndPut(){
        move();
       turnLeft();      
       move();
       putBeeper();
       turnRight();
 }
 function goAroundTheField(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
    turnLeft();
    moveFourTimes();
    turnLeft();
    moveFourTimes();
    turnLeft();
 }
 function moveFourTimes(){
    move();
    move();
    move();
    move();   
 }