$(document).ready(function(){

  /*$("#menu-events-link").hover(function(){
    $("#menu-events-link h2").css(function(){
    });
      {'opacity':'0'});
    setTimeout(function(){ $("#menu-events-link h2").html('Stars'); }, 0);
    setTimeout(function(){ $("#menu-events-link h2").css({'opacity':'1'}); }, 0);
  }, function(){
    $("#menu-events-link h2").css({'opacity':'0'});
    setTimeout(function(){ $("#menu-events-link h2").html('Events'); }, 100);
    setTimeout(function(){ $("#menu-events-link h2").css({'opacity':'1'}); }, 100);
  });
  $("#menu-mission-link").hover(function(){
    $(this).css({'color':'#90a565','border-color':'#90a565', 'box-shadow':'0px 0px 32px #90a565'});
  }, function(){
    $(this).css({'color':'#dea8fa','border-color':'#dea8fa', 'box-shadow':''});
  });
  $("#menu-sources-link").hover(function(){
    $(this).css({'color':'#90a565','border-color':'#90a565', 'box-shadow':'0px 0px 32px #90a565'});
  }, function(){
    $(this).css({'color':'#dea8fa','border-color':'#dea8fa', 'box-shadow':''});
  });*/

  if (window.location.pathname == "/spirits.html" || window.location.pathname == "/Users/ioanbutiu/github/awesite.github.io/spirits.html") {

    console.log("on the mission page");

    $( "#menu" ).find('*').css("border-color", "#dea8fa" );
    $(".menu-link, #menu-footer-1, #menu-footer-2, #menu-footer-4, #home-button").css({'color':'#dea8fa', 'border-color':'#dea8fa'});
    $("#menu-mission-link").css({'box-shadow':'0px 0px 32px #dea8fa'});
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", "#dea8fa" );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", "#dea8fa" );

    $("#menu-events-link").hover(function(){
      $(this).css({'color':'#b7c7f7','border-color':'#b7c7f7', 'box-shadow':'0px 0px 32px #b7c7f7'});
    }, function(){
      $(this).css({'color':'#dea8fa','border-color':'#dea8fa', 'box-shadow':''});
    });

    $("#menu-sources-link").hover(function(){
      $(this).css({'color':'#90a565','border-color':'#90a565', 'box-shadow':'0px 0px 32px #90a565'});
    }, function(){
      $(this).css({'color':'#dea8fa','border-color':'#dea8fa', 'box-shadow':''});
    });

    $("#menu-footer-1, #menu-footer-2, #menu-footer-4").hover(function(){
      $(this).css({'background-color':'#dea8fa', 'color':'#090909'});
    }, function(){
      $(this).css({'background-color':'#090909', 'color':'#dea8fa'});
    });

  } else if(window.location.pathname == "/stars.html" || window.location.pathname == "/Users/ioanbutiu/github/awesite.github.io/stars.html") {

    console.log("on the events page");

    $( "#menu" ).find('*').css("border-color", "#b7c7f7" );
    $(".menu-link, #menu-footer-1, #menu-footer-2, #menu-footer-4, #home-button").css({'color':'#b7c7f7', 'border-color':'#b7c7f7'});
    $("#menu-events-link").css({'box-shadow':'0px 0px 32px #b7c7f7'});
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", "#b7c7f7" );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", "#b7c7f7" );

    $("#menu-mission-link").hover(function(){
      $(this).css({'color':'#dea8fa','border-color':'#dea8fa', 'box-shadow':'0px 0px 32px #dea8fa'});
    }, function(){
      $(this).css({'color':'#b7c7f7','border-color':'#b7c7f7', 'box-shadow':''});
    });

    $("#menu-sources-link").hover(function(){
      $(this).css({'color':'#90a565','border-color':'#90a565', 'box-shadow':'0px 0px 32px #90a565'});
    }, function(){
      $(this).css({'color':'#b7c7f7','border-color':'#b7c7f7', 'box-shadow':''});
    });

    $("#menu-footer-1, #menu-footer-2, #menu-footer-4").hover(function(){
      $(this).css({'background-color':'#b7c7f7', 'color':'#090909'});
    }, function(){
      $(this).css({'background-color':'#090909', 'color':'#b7c7f7'});
    });

  } else {

    /*$( "#menu" ).find('*').css("border-color", "#c4ac9d" );
    $(".menu-link, #menu-footer-1, #menu-footer-2, #menu-footer-4, #home-button").css({'color':'#c4ac9d', 'border-color':'#c4ac9d'});
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", "#c4ac9d" );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", "#c4ac9d" );

    $("#menu-events-link").hover(function(){
      $(this).css({'border-color':'#b7c7f7', 'box-shadow':'0px 0px 32px #b7c7f7'});
    }, function(){
      $(this).css({'color':'#c4ac9d','border-color':'#c4ac9d', 'box-shadow':''});
    });

    $("#menu-mission-link").hover(function(){
      $(this).css({'border-color':'#dea8fa', 'box-shadow':'0px 0px 32px #dea8fa'});
    }, function(){
      $(this).css({'color':'#c4ac9d','border-color':'#c4ac9d', 'box-shadow':''});
    });

    $("#menu-sources-link").hover(function(){
      $(this).css({'border-color':'#90a565', 'box-shadow':'0px 0px 32px #90a565'});
    }, function(){
      $(this).css({'color':'#c4ac9d','border-color':'#c4ac9d', 'box-shadow':''});
    });

    $("#menu-footer-1, #menu-footer-2, #menu-footer-4").hover(function(){
      $(this).css({'background-color':'#c4ac9d', 'color':'#090909'});
    }, function(){
      $(this).css({'background-color':'', 'color':'#c4ac9d'});
    });
    */
  }



  $("#menu-button").hover(function(){

    $("#eye-closed").css("display","none");
    $("#eye-open").css("display","block");


    /*$('#menu-button').css("background-color", "#c4ac9d");
    $('#menu-button').css("border-color", "#c4ac9d");
    $('#menu-button').css("transform", "rotate(90deg)");
    $('#menu-button svg').css("fill", "#090909");*/

  }, function(){
    /*$('#menu-button').css("background-color", "");
    $('#menu-button').css("border-color", "");
    $('#menu-button').css("transform", "");
    $('#menu-button svg').css("fill", "");*/

    $("#eye-open").css("display","none");
    $("#eye-closed").css("display","block");


  });


  $("#menu-button").on( "click", function(){

    if ($('#menu').css("display") === "none"){
      $('#menu').fadeIn(400);
      $('#menu').css("display", "flex");
      $('#menu-half').css("transform", "translateX(0)");
      /*$('#menu-button').css("background-color", "#c4ac9d");
      $('#menu-button').css("transform", "rotate(90deg)");
      $('#menu-button').css("border-color", "#c4ac9d");
      $('#menu-button svg').css("fill", "#090909");*/
      //$('#nav').css("z-index", "100");

      //$("#nav").css("position", "fixed");

      $("#eye-open").css("display","block");
      $("#eye-closed").css("display","none");

      /*$("#menu-button").hover(function(){
      $('#menu-button').css("background-color", "");
      $('#menu-button').css("border-color", "");
      $('#menu-button').css("transform", "");
      $('#menu-button svg').css("fill", "");
      }, function(){
        $('#menu-button').css("background-color", "#c4ac9d");
        $('#menu-button').css("border-color", "#c4ac9d");
        $('#menu-button').css("transform", "rotate(90deg)");
        $('#menu-button svg').css("fill", "#090909");
      });*/

      $("#menu-button").hover(function(){

        $("#eye-open").css("display","none");
        $("#eye-closed").css("display","block");
      }, function(){
        $("#eye-closed").css("display","none");
        $("#eye-open").css("display","block");
      });

    } else {
      $('#menu').fadeOut(400);
      $('#menu-half').css("transform", "");
      //$('#menu').css("display", "");
      //$('#nav').css("z-index", "100");
      //$('#menu-button').css("background-color", "");
      //$('#menu-button svg').css("fill", "");

      //$("#nav").css("position", "");

      $("#eye-open").css("display","none");
      $("#eye-closed").css("display","block");

      /*$("#menu-button").hover(function(){
      $('#menu-button').css("background-color", "#c4ac9d");
      $('#menu-button').css("border-color", "#c4ac9d");
      $('#menu-button').css("transform", "rotate(90deg)");
      $('#menu-button svg').css("fill", "#090909");
      }, function(){
        $('#menu-button').css("background-color", "");
        $('#menu-button').css("border-color", "");
        $('#menu-button').css("transform", "");
        $('#menu-button svg').css("fill", "");
      });*/

      $("#menu-button").hover(function(){

        $("#eye-closed").css("display","none");
        $("#eye-open").css("display","block");
      }, function(){
        $("#eye-open").css("display","none");
        $("#eye-closed").css("display","block");
      });

    }
  });

  $("#menu-close").on( "click", function(){

    $('#menu').fadeOut(400);
    $('#menu-half').css("transform", "");

    $("#eye-open").css("display","none");
    $("#eye-closed").css("display","block");

    $("#menu-button").hover(function(){

      $("#eye-closed").css("display","none");
      $("#eye-open").css("display","block");
    }, function(){
      $("#eye-open").css("display","none");
      $("#eye-closed").css("display","block");
    });

  });


  $("#cursor").css({'display': 'none'});
  $("#moth-2").css({'display': 'none'});
  $("#moon-2").css({'display': 'none'});
  $("#lotus-2").css({'display': 'none'});


    (function() {

    var quotes = $(".quotes-mobile");
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
