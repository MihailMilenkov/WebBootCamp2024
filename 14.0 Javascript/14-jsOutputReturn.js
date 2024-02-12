var change = buyApples(5);
console.log(change);

function buyApples(money){
    return (money % 1.3).toFixed(2);
}