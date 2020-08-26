$(document).ready(function(){

  $("#nav-link-spirits").hover(function(){
    $('body').css("background-color", "#f8d6d1");
    $('#nav-link-spirits').css("box-shadow", "0px 56px 64px #e25d45, inset 0 0 64px 32px #af2a12");
    //$('#nav-link-spirits').css("animation", "float 6s ease-in-out infinite");
  $("#menu-button").hover(function(){
    $('#menu-button').css("background-color", "#f5f5f5");
    $('#menu-button').css("transform", "rotate(90deg)");
    $('#menu-button svg').css("fill", "#090909");

  }, function(){
    $('#menu-button').css("background-color", "");
    $('#menu-button').css("transform", "");
    $('#menu-button svg').css("fill", "");
  });

  $("#menu-button").on( "click", function(){
    if ($('#menu').css("display") === "none"){
      $('#menu').css("display", "flex");
      $('#menu-button').css("background-color", "#f5f5f5");
      $('#menu-button').css("transform", "rotate(90deg)");
      $('#menu-button svg').css("fill", "#090909");
    } else {
      $('#menu').css("display", "");
      $('#menu-button').css("background-color", "");
      $('#menu-button svg').css("fill", "");
    }
  });


});

/*
$(document).ready(function(){

  $("#nav-link-spirits").hover(function(){
    $('body').css("background-color", "#f8d6d1");
    $('#nav-link-spirits').css("box-shadow", "0px 56px 64px #e25d45, inset 0 0 64px 32px #af2a12");
    //setTimeout(() => {$('#nav-link-spirits').css("animation", "float 6s ease-in-out infinite");}, 800);
>>>>>>> 14aa4134bf0dc9b7f0dd0a4d999953ed45decb27
    $('#nav-link-stars').css("box-shadow", "0px 16px 24px #f4c2b9, inset 0 0 64px 32px #f4c2b9");
    $('#nav-link-stars').css("background-color", "#f8d6d1");
    $('#nav-link-stars').css("filter", "blur(8px)");
    $('#nav-link-stones').css("box-shadow", "0px 16px 24px #f4c2b9, inset 0 0 64px 32px #f4c2b9");
    $('#nav-link-stones').css("background-color", "#f8d6d1");
    $('#nav-link-stones').css("filter", "blur(8px)");

  }, function(){
    $('body').css("background-color", "")
    $('#nav-link-spirits').css("box-shadow", "");
<<<<<<< HEAD
    //$('#nav-link-spirits').css("animation", "");
=======
    //setTimeout(() => {$('#nav-link-spirits').css("animation", "");}, 800);
>>>>>>> 14aa4134bf0dc9b7f0dd0a4d999953ed45decb27
    $('#nav-link-stars').css("box-shadow", "");
    $('#nav-link-stars').css("background-color", "");
    $('#nav-link-stars').css("filter", "");
    $('#nav-link-stones').css("box-shadow", "");
    $('#nav-link-stones').css("background-color", "");
    $('#nav-link-stones').css("filter", "");
  });

  $("#nav-link-stones").hover(function(){
    $('body').css("background-color", "#dfe9d5");
    $('#nav-link-stones').css("box-shadow", "0px 56px 64px #80a559, inset 0 0 64px 32px #4d7226");
    $('#nav-link-spirits').css("box-shadow", "0px 16px 24px #cfddc1, inset 0 0 64px 32px #cfddc1");
    $('#nav-link-spirits').css("background-color", "#dfe9d5");
    $('#nav-link-spirits').css("filter", "blur(8px)");
    $('#nav-link-stars').css("box-shadow", "0px 16px 24px #cfddc1, inset 0 0 64px 32px #cfddc1");
    $('#nav-link-stars').css("background-color", "#dfe9d5");
    $('#nav-link-stars').css("filter", "blur(8px)");

  }, function(){
    $('body').css("background-color", "")
    $('#nav-link-stones').css("box-shadow", "");
    $('#nav-link-spirits').css("box-shadow", "");
    $('#nav-link-spirits').css("background-color", "");
    $('#nav-link-spirits').css("filter", "");
    $('#nav-link-stars').css("box-shadow", "");
    $('#nav-link-stars').css("background-color", "");
    $('#nav-link-stars').css("filter", "");
  });

  $("#nav-link-stars").hover(function(){
    $('body').css("background-color", "#d9dde9");
    $('#nav-link-stars').css("box-shadow", "0px 56px 64px #6879a6, inset 0 0 64px 32px #425790");
    $('#nav-link-spirits').css("box-shadow", "0px 16px 24px #c6cdde, inset 0 0 64px 32px #c6cdde");
    $('#nav-link-spirits').css("background-color", "#d9dde9");
    $('#nav-link-spirits').css("filter", "blur(8px)");
    $('#nav-link-stones').css("box-shadow", "0px 16px 24px #c6cdde, inset 0 0 64px 32px #c6cdde");
    $('#nav-link-stones').css("background-color", "#d9dde9");
    $('#nav-link-stones').css("filter", "blur(8px)");

  }, function(){
    $('body').css("background-color", "")
    $('#nav-link-stars').css("box-shadow", "");
    $('#nav-link-spirits').css("box-shadow", "");
    $('#nav-link-spirits').css("background-color", "");
    $('#nav-link-spirits').css("filter", "");
    $('#nav-link-stones').css("box-shadow", "");
    $('#nav-link-stones').css("background-color", "");
    $('#nav-link-stones').css("filter", "");
  });


});

*/
