$(document).ready(function () {
  let hover_mouseenter = [
    ".area-basay", // 0
  ];

  /* AREAS */
  $(hover_mouseenter[0]).mouseenter(function () {
    $("#area-basay-hover").css("opacity", "1");
  });

  $(hover_mouseenter[0]).mouseleave(function () {
    $("#area-basay-hover").css("opacity", "0");
  });
  //
  /* AREAS */
});
