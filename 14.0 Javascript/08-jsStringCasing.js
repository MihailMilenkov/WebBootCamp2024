var name = prompt("Insert your name please:");

var firstCharOfName = name.slice(0,1).toUpperCase();
var restOfName = name.slice(1, name.length).toLowerCase();

alert("Hello " + firstCharOfName + restOfName + ".");