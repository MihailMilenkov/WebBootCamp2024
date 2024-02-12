console.log(whosPaying(["pesho", "gosho", "stamat"]));


function whosPaying(names){
    return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!"
}