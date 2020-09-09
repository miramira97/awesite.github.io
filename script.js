$(document).ready(function(){

  if (window.location.pathname == "/mission.html") {

    console.log("on the mission page");

    $("#home-button").css("color", "#dea8fa");
    $( "#menu" ).find('*').css("color", "#dea8fa" );
    $( "#menu" ).find('*').css("border-color", "#dea8fa" );
    $( "#menu svg" ).css("fill", "#dea8fa" );
    $( "#menu-button" ).css("border-color", "#dea8fa" );
    $( "#menu-button svg" ).css("fill", "#dea8fa" );

    $("#menu-button").hover(function(){
      $('#menu-button').css("background-color", "#dea8fa");
      $('#menu-button').css("border-color", "#dea8fa");
      $('#menu-button').css("transform", "rotate(90deg)");
      $('#menu-button svg').css("fill", "#090909");

    }, function(){
      $('#menu-button').css("background-color", "#090909");
      $('#menu-button').css("border-color", "#dea8fa");
      $('#menu-button').css("transform", "");
      $('#menu-button svg').css("fill", "#dea8fa");
    });

     $("#nav").css("background-image", "linear-gradient(rgba(9,9,9,1), rgba(9,9,9,1), rgba(9,9,9,0)");
     //$("#nav").css("padding-bottom", "6rem");
     $("#nav").css("position", "static");

  } else {

    console.log("on the home page");

    $("#home-button").css("color", "");
    $( "#menu" ).find('*').css("color", "" );
    $( "#menu" ).find('*').css("border-color", "" );
    $( "#menu svg" ).css("fill", "" );
    $( "#menu-button" ).css("border-color", "" );
    $( "#menu-button svg" ).css("fill", "" );

    $("#nav").css("background-image", "");
    $("#nav").css("padding-bottom", "");
    $("#nav").css("position", "");
  }



  $("#menu-button").hover(function(){
    $('#menu-button').css("background-color", "#c4ac9d");
    $('#menu-button').css("border-color", "#c4ac9d");
    $('#menu-button').css("transform", "rotate(90deg)");
    $('#menu-button svg').css("fill", "#090909");

  }, function(){
    $('#menu-button').css("background-color", "");
    $('#menu-button').css("border-color", "");
    $('#menu-button').css("transform", "");
    $('#menu-button svg').css("fill", "");
  });

  $("#menu-button").on( "click", function(){
    if ($('#menu').css("display") === "none"){
      $('#menu').fadeIn(400);
      $('#menu').css("display", "flex");
      $('#menu-button').css("background-color", "#c4ac9d");
      $('#menu-button').css("transform", "rotate(90deg)");
      $('#menu-button').css("border-color", "#c4ac9d");
      $('#menu-button svg').css("fill", "#090909");
      $('#nav').css("z-index", "100");

      $("#menu-button").hover(function(){
        $('#menu-button').css("background-color", "");
        $('#menu-button').css("border-color", "");
        $('#menu-button').css("transform", "");
        $('#menu-button svg').css("fill", "");

      }, function(){
        $('#menu-button').css("background-color", "#c4ac9d");
        $('#menu-button').css("border-color", "#c4ac9d");
        $('#menu-button').css("transform", "rotate(90deg)");
        $('#menu-button svg').css("fill", "#090909");
      });

    } else {
      $('#menu').fadeOut(400);
      //$('#menu').css("display", "");
      $('#nav').css("z-index", "100");
      //$('#menu-button').css("background-color", "");
      //$('#menu-button svg').css("fill", "");

      $("#menu-button").hover(function(){
        $('#menu-button').css("background-color", "#c4ac9d");
        $('#menu-button').css("border-color", "#c4ac9d");
        $('#menu-button').css("transform", "rotate(90deg)");
        $('#menu-button svg').css("fill", "#090909");

      }, function(){
        $('#menu-button').css("background-color", "");
        $('#menu-button').css("border-color", "");
        $('#menu-button').css("transform", "");
        $('#menu-button svg').css("fill", "");
      });

    }
  });


  $("#cursor").css({'display': 'none'});
  $("#moth-2").css({'display': 'none'});
  $("#moon-2").css({'display': 'none'});
  $("#lotus-2").css({'display': 'none'});

//moth hover
  $("#moth-hover-area").hover(function(){
    $("#cursor").css({'display': 'block'});
    $("#cursor").css({'color': '#dea8fa'});
    $("#cursor").css({'background-color': '#090909'});
    $("#cursor").css({'border-color': '#dea8fa'});
    //$("#cursor").css({'text-shadow': '0px 0px 4px #dea8fa'});
    $("#cursor").html('<small>Spirits</small>');
    //$("#moth-1").hide(function(){$("#moth-2").show();});
    $("#moth-2").css({'display': 'block'});
    $("#moth-1").css({'display': 'none'});
    $('html').css({'cursor': 'none'});
    changeCursor();
  }, function() {
    $("#cursor").css({'display': 'none'});
    //$("#moth-2").hide(function(){$("#moth-1").show();});
    $("#moth-2").css({'display': 'none'});
    $("#moth-1").css({'display': ''});
    $('html').css({'cursor': 'auto'});
  });

  /*$("#moth-hover-area").on( "click", function(){
    $("#content").load("mission.html");
  });*/

// moon hover
  $("#moon-hover-area").hover(function(){
    $("#cursor").css({'display': 'block'});
    $("#cursor").css({'color': '#b7c7f7'});
    $("#cursor").css({'background-color': '#090909'});
    $("#cursor").css({'border-color': '#b7c7f7'});
    //$("#cursor").css({'text-shadow': '0px 0px 4px #b7c7f7'});
    $("#cursor").html('<small>Stars</small>');
    $("#moon-2").css({'display': 'block'});
    $("#moon-1").css({'display': 'none'});
    $('html').css({'cursor': 'none'});
    changeCursor();
  }, function() {
    $("#cursor").css({'display': 'none'});
    $("#moon-2").css({'display': 'none'});
    $("#moon-1").css({'display': ''});
    $('html').css({'cursor': 'auto'});
  });

  // lotus hover
    $("#lotus-hover-area").hover(function(){
      $("#cursor").css({'display': 'block'});
      $("#cursor").css({'color': '#90a565'});
      $("#cursor").css({'background-color': '#090909'});
      $("#cursor").css({'border-color': '#90a565'});
      //$("#cursor").css({'text-shadow': '0px 0px 4px #90a565'});
      $("#cursor").html('<small>Stones</small>');
      $("#lotus-2").css({'display': 'block'});
      $("#lotus-1").css({'display': 'none'});
      $('html').css({'cursor': 'none'});
      changeCursor();
    }, function() {
      $("#cursor").css({'display': 'none'});
      $("#lotus-2").css({'display': 'none'});
      $("#lotus-1").css({'display': ''});
      $('html').css({'cursor': 'auto'});
    });


    (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(4000)
            .fadeOut(1000, showNextQuote);
    }

    showNextQuote();

})();


    var current_title = $(document).attr('href');

    console.log(window.location.pathname);




});


function changeCursor() {
  var ElementCursor = {
      cursorElement: "",
      setCursor: function (cursorId) {
          $('html').css({
              'cursor': ''
          });
          $('html').mousedown(function (e) {return false;});
          ElementCursor.cursorElement = cursorId;
          ElementCursor.updateCursor();
      },
      removeCursor: function () {
          $('html').css({
              'cursor': ''
          });
          ElementCursor.cursorElement = '';
      },
      updateCursor: function () {
          $(document).mousemove(function (e) {
              $('#' + ElementCursor.cursorElement).css({
                  'position': 'fixed',
                      'top': e.pageY-10 + 'px',
                      'left': e.pageX-50 + 'px'
              });
          });
      }
  };

  ElementCursor.setCursor("cursor");

}


/*
$(document).ready(function(){

  $("#nav-link-spirits").hover(function(){
    $('body').css("background-color", "#f8d6d1");
    $('#nav-link-spirits').css("box-shadow", "0px 56px 64px #e25d45, inset 0 0 64px 32px #af2a12");
    //setTimeout(() => {$('#nav-link-spirits').css("animation", "float 6s ease-in-out infinite");}, 800);
    $('#nav-link-stars').css("box-shadow", "0px 16px 24px #f4c2b9, inset 0 0 64px 32px #f4c2b9");
    $('#nav-link-stars').css("background-color", "#f8d6d1");
    $('#nav-link-stars').css("filter", "blur(8px)");
    $('#nav-link-stones').css("box-shadow", "0px 16px 24px #f4c2b9, inset 0 0 64px 32px #f4c2b9");
    $('#nav-link-stones').css("background-color", "#f8d6d1");
    $('#nav-link-stones').css("filter", "blur(8px)");

  }, function(){
    $('body').css("background-color", "")
    $('#nav-link-spirits').css("box-shadow", "");
    //setTimeout(() => {$('#nav-link-spirits').css("animation", "");}, 800);
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
