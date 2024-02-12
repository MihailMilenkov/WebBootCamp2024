fizzBuzz();

function fizzBuzz(){
for (let currentNum = 0; currentNum <= 100; currentNum++) {
    switch (true) {
        case (currentNum % 5 == 0 && currentNum % 3 == 0):
            console.log(currentNum + " is FizzBuzz");
            break;
            case (currentNum % 3 == 0 ):
                console.log(currentNum + " is Fizz");
                break;
                case (currentNum % 5 == 0):
                    console.log(currentNum + " is Buzz");
                    break;    
        default:
            break;
    }    
}
}