//document.querySelector();
// jQuery();

//document.querySelector("h1");
// $(document).ready(function() {
//     $("h1").css("color", "green");
// });

//document.querySelectorAll("button");
$("button");

$("h1").addClass("big-title margin-50");

if ($("h1").hasClass("margin-50")) {
    $("h1").removeClass("margin-50");
}

$("button").text("Click Fast");
// $("button").html("<em>Hey</em>");

// console.log($("a").attr("href"));
// console.log($("a").attr("class"));

// $("h1").click(function() {
//     $("h1").css("color", "brown");
// });

$("button").click(function() {    
    $("h1").css("color", "brown");
});

$("input").keypress(function(event) {
    console.log(event.key);
});
$(document).keypress(function(event) {
    $("h1").text(event.key);
});
// $("h2").on("mouseover", function() {
//     $("h2").css("color", "red");
// });
 $("h1").on("click", function() {
     $(".link1").trigger("click");
 });
$("h2").before("<button>New Button</button>");
$("h2").after("<button>New Button</button>");
$("h2").prepend("<button>New Button</button>");
$("h2").append("<button>New Button</button>");
// $("button").remove();
