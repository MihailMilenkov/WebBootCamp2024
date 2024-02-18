document.querySelector("input").click();
document.querySelector("ul").lastElementChild.innerHTML = "third modified";
var items1 = document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "orange";
var btn1 = document.getElementById("123");
var btn2 = document.getElementsByClassName("123");
var btn3 = document.getElementsByName("123");
var btn4 = document.getElementsByTagName("123");
// var btn5 = document.getElementsByTagNameNS("123");
var title = document.querySelector("#title");
var btn6 = document.querySelector(".btn");
var h1 = document.querySelector("h1");
var anchorInListItem = document.querySelector("li a");
var listItemWithClassItem = document.querySelector("li.item");
document.querySelector("li a").style.color = "green";
document.querySelector("button").style.background = "yellow";
document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("huge");

// something.doS omething(); method
// something.something = something; assign property
// something.something; access property

// prop:
// innerHTML
// style
// firstChild
// lastChild

// Method / func
// click();
// appendChild();
// SetAttribute();