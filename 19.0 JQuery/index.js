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

console.log($("a").attr("href"));
console.log($("a").attr("class"));