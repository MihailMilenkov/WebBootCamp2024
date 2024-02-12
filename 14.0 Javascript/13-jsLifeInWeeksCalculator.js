weeksLeft(29);

function weeksLeft(age) {
        var years = 90 - age;
    
        console.log("You have " + Math.floor(years * 365) + " days, " + Math.floor(years * 52) + " weeks, and " 
            + Math.floor(years * 12) + " months left.");
    }