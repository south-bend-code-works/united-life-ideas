function openNav() {
    $("#sidebar-will").show();
  $(".left-will").css("width", "250px");
  $(".right-will").css("margin-left", "250px");
  $("#open").hide();
  $(".right-will").fadeTo("fast",0.5,function() {
  });
}

function init() {
  $("#open").on('click', openNav);
  $("#close").on('click', closeNav);
  $("#sidebar-will").hide();
}

$(document).ready(init);

function closeNav() {
  $("#sidebar-will").hide();
  $(".left-will").css("width", "0px");
  $(".right-will").css("margin-left", "0px");
  $("#open").show();
  $(".right-will").fadeTo("fast",1.0,function() {
  });
}
