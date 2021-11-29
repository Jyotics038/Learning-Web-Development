$("h1").css("color", "red");

$("h1").addClass("big-title margin-50");

$("button").click(function () {
  //$("h1").css("color", "purple");
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

$(document).keypress(function (event) {
  //console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
