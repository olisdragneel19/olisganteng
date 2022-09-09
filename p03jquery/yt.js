$(document).ready(() => {
  $("td").click(function (event) {
    alert("you have chosen " + $(this).html() + "!");
  });
  $("th").click(function (event) {
    alert("you have chosen " + $(this).html() + "!");
  });
});