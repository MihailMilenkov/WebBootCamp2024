// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// 0, 1, 2, 3, 4, 5, 6, 7,  8, step
console.log(fibonacciGenerator(7777));

function fibonacciGenerator(nums){
    var array = [];
    
    for (let i = 0; i < nums; i++) {
        if (i == 0 || i == 1) {
            array.push(i);
        } else {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }        
    }

    return array;
}