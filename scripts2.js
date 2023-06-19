$(document).ready(function () {
  let hover_mouseenter = [
    ".new-hover-state-marinadelrey", // 0
    ".new-hover-state-venice", // 1
    ".new-hover-state-santamonica", // 2
    ".new-hover-state-pacificpalisades", // 3
    ".new-hover-state-encino", // 4
    ".new-hover-state-brentwood", // 5
    ".new-hover-state-marvista", // 6
    ".new-hover-state-westwood", // 7
    ".new-hover-state-shermanoaks", // 8
    ".new-hover-state-northhollywood", // 10
    ".new-hover-state-atwatervillage", // 11
    ".new-hover-state-losfeliz", // 12
    ".new-hover-state-westhollywood", // 13
    ".new-hover-state-beverlyhills", // 14
    ".new-hover-state-glendale", // 15
    ".new-hover-state-burbank", // 16
    ".new-hover-state-eaglerock", // 17
    ".new-hover-state-highlandpark", // 18
    ".new-hover-state-glasselpark", // 19
    ".new-hover-state-silverlake", // 20
    ".new-hover-state-echopark", // 21
    ".new-hover-state-palms", // 22
    ".new-hover-state-culvercity", // 23
    ".new-hover-state-westadams", // 24
    ".new-hover-state-baldwinhills", // 25
    ".new-hover-state-viewpark", // 26
    ".new-hover-state-leimertpark", // 27
  ];

  /*AREAS STATE*/
  $(hover_mouseenter[0]).mouseenter(function () {
    $("#new-states-map-hover-marinadelrey").css("opacity", "1");
  });
  $(hover_mouseenter[0]).mouseleave(function () {
    $("#new-states-map-hover-marinadelrey").css("opacity", "0");
  });
  //
  $(hover_mouseenter[1]).mouseenter(function () {
    $("#new-states-map-hover-venice").css("opacity", "1");
  });
  $(hover_mouseenter[1]).mouseleave(function () {
    $("#new-states-map-hover-venice").css("opacity", "0");
  });
  //
  $(hover_mouseenter[2]).mouseenter(function () {
    $("#new-states-map-hover-santamonica").css("opacity", "1");
  });
  $(hover_mouseenter[2]).mouseleave(function () {
    $("#new-states-map-hover-santamonica").css("opacity", "0");
  });
  //
  $(hover_mouseenter[3]).mouseenter(function () {
    $("#new-states-map-hover-pacificpalisades").css("opacity", "1");
  });
  $(hover_mouseenter[3]).mouseleave(function () {
    $("#new-states-map-hover-pacificpalisades").css("opacity", "0");
  });
  //
  $(hover_mouseenter[4]).mouseenter(function () {
    $("#new-states-map-hover-encino").css("opacity", "1");
  });
  $(hover_mouseenter[4]).mouseleave(function () {
    $("#new-states-map-hover-encino").css("opacity", "0");
  });
  //
  $(hover_mouseenter[5]).mouseenter(function () {
    $("#new-states-map-hover-brentwood").css("opacity", "1");
  });
  $(hover_mouseenter[5]).mouseleave(function () {
    $("#new-states-map-hover-brentwood").css("opacity", "0");
  });
  //
  $(hover_mouseenter[6]).mouseenter(function () {
    $("#new-states-map-hover-marvista").css("opacity", "1");
  });
  $(hover_mouseenter[6]).mouseleave(function () {
    $("#new-states-map-hover-marvista").css("opacity", "0");
  });
  //
  $(hover_mouseenter[7]).mouseenter(function () {
    $("#new-states-map-hover-westwood").css("opacity", "1");
  });
  $(hover_mouseenter[7]).mouseleave(function () {
    $("#new-states-map-hover-westwood").css("opacity", "0");
  });
  //
  $(hover_mouseenter[8]).mouseenter(function () {
    $("#new-states-map-hover-shermanoaks").css("opacity", "1");
  });
  $(hover_mouseenter[8]).mouseleave(function () {
    $("#new-states-map-hover-shermanoaks").css("opacity", "0");
  });
  //
  $(hover_mouseenter[9]).mouseenter(function () {
    $("#new-states-map-hover-northhollywood").css("opacity", "1");
  });
  $(hover_mouseenter[9]).mouseleave(function () {
    $("#new-states-map-hover-northhollywood").css("opacity", "0");
  });
  //
  $(hover_mouseenter[10]).mouseenter(function () {
    $("#new-states-map-hover-atwatervillage").css("opacity", "1");
  });
  $(hover_mouseenter[10]).mouseleave(function () {
    $("#new-states-map-hover-atwatervillage").css("opacity", "0");
  });
  //
  $(hover_mouseenter[11]).mouseenter(function () {
    $("#new-states-map-hover-losfeliz").css("opacity", "1");
  });
  $(hover_mouseenter[11]).mouseleave(function () {
    $("#new-states-map-hover-losfeliz").css("opacity", "0");
  });
  //
  $(hover_mouseenter[12]).mouseenter(function () {
    $("#new-states-map-hover-westhollywood").css("opacity", "1");
  });
  $(hover_mouseenter[12]).mouseleave(function () {
    $("#new-states-map-hover-westhollywood").css("opacity", "0");
  });
  //
  $(hover_mouseenter[13]).mouseenter(function () {
    $("#new-states-map-hover-beverlyhills").css("opacity", "1");
  });
  $(hover_mouseenter[13]).mouseleave(function () {
    $("#new-states-map-hover-beverlyhills").css("opacity", "0");
  });
  //
  $(hover_mouseenter[14]).mouseenter(function () {
    $("#new-states-map-hover-glendale").css("opacity", "1");
  });
  $(hover_mouseenter[14]).mouseleave(function () {
    $("#new-states-map-hover-glendale").css("opacity", "0");
  });
  //
  $(hover_mouseenter[15]).mouseenter(function () {
    $("#new-states-map-hover-burbank").css("opacity", "1");
  });
  $(hover_mouseenter[15]).mouseleave(function () {
    $("#new-states-map-hover-burbank").css("opacity", "0");
  });
  //
  $(hover_mouseenter[16]).mouseenter(function () {
    $("#new-states-map-hover-eaglerock").css("opacity", "1");
  });
  $(hover_mouseenter[16]).mouseleave(function () {
    $("#new-states-map-hover-eaglerock").css("opacity", "0");
  });
  //
  $(hover_mouseenter[17]).mouseenter(function () {
    $("#new-states-map-hover-highlandpark").css("opacity", "1");
  });
  $(hover_mouseenter[17]).mouseleave(function () {
    $("#new-states-map-hover-highlandpark").css("opacity", "0");
  });
  //
  $(hover_mouseenter[18]).mouseenter(function () {
    $("#new-states-map-hover-glassellpark").css("opacity", "1");
  });
  $(hover_mouseenter[18]).mouseleave(function () {
    $("#new-states-map-hover-glassellpark").css("opacity", "0");
  });
  //
  $(hover_mouseenter[19]).mouseenter(function () {
    $("#new-states-map-hover-silverlake").css("opacity", "1");
  });
  $(hover_mouseenter[19]).mouseleave(function () {
    $("#new-states-map-hover-silverlake").css("opacity", "0");
  });
  //
  $(hover_mouseenter[20]).mouseenter(function () {
    $("#new-states-map-hover-echopark").css("opacity", "1");
  });
  $(hover_mouseenter[20]).mouseleave(function () {
    $("#new-states-map-hover-echopark").css("opacity", "0");
  });
  //
  $(hover_mouseenter[21]).mouseenter(function () {
    $("#new-states-map-hover-palms").css("opacity", "1");
  });
  $(hover_mouseenter[21]).mouseleave(function () {
    $("#new-states-map-hover-palms").css("opacity", "0");
  });
  //
  $(hover_mouseenter[22]).mouseenter(function () {
    $("#new-states-map-hover-culvercity").css("opacity", "1");
  });
  $(hover_mouseenter[22]).mouseleave(function () {
    $("#new-states-map-hover-culvercity").css("opacity", "0");
  });
  //
  $(hover_mouseenter[23]).mouseenter(function () {
    $("#new-states-map-hover-westadams").css("opacity", "1");
  });
  $(hover_mouseenter[23]).mouseleave(function () {
    $("#new-states-map-hover-westadams").css("opacity", "0");
  });
  //
  $(hover_mouseenter[24]).mouseenter(function () {
    $("#new-states-map-hover-baldwinhills").css("opacity", "1");
  });
  $(hover_mouseenter[24]).mouseleave(function () {
    $("#new-states-map-hover-baldwinhills").css("opacity", "0");
  });
  //
  $(hover_mouseenter[25]).mouseenter(function () {
    $("#new-states-map-hover-viewpark").css("opacity", "1");
  });
  $(hover_mouseenter[25]).mouseleave(function () {
    $("#new-states-map-hover-viewpark").css("opacity", "0");
  });
  //
  $(hover_mouseenter[26]).mouseenter(function () {
    $("#new-states-map-hover-leimertpark").css("opacity", "1");
  });
  $(hover_mouseenter[26]).mouseleave(function () {
    $("#new-states-map-hover-leimertpark").css("opacity", "0");
  });
  //
  /*AREAS STATE*/
});
