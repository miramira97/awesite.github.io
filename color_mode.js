
       let root = document.documentElement;

   //get all color variables
    let lc = getComputedStyle(root).getPropertyValue('--light-color');
    let dc = getComputedStyle(root).getPropertyValue('--dark-color');
    let dp = getComputedStyle(root).getPropertyValue('--dark-purple');
    let db = getComputedStyle(root).getPropertyValue('--dark-blue');
    let dg = getComputedStyle(root).getPropertyValue('--dark-green');
    let lm = getComputedStyle(root).getPropertyValue('--light-menu-bg');
    let ds = getComputedStyle(root).getPropertyValue('--dark-shadow');
    let lp = getComputedStyle(root).getPropertyValue('--light-purple');
    let lb = getComputedStyle(root).getPropertyValue('--light-blue');
    let lg = getComputedStyle(root).getPropertyValue('--light-green');
    let dm = getComputedStyle(root).getPropertyValue('--dark-menu-bg');
    let ls = getComputedStyle(root).getPropertyValue('--light-shadow');

    //get time variables
    var date = new Date()
    var hrs = date.getHours()


   if (localStorage.getItem('theme') == 'light' || (localStorage.getItem('theme')==null && hrs >5 && hrs <18)) {
       console.log(document.URL)
       root.style.setProperty('--background-color', lc);
       root.style.setProperty('--foreground-color', dc);
   }
   else {
       root.style.setProperty('--background-color', dc);
       root.style.setProperty('--foreground-color', lc);

   }

   window.onload = function() {
       console.log('3')
       //use localstorage to pick theme so that it saves when moving around pages
       console.log(localStorage.getItem('theme'))
       if (localStorage.getItem('theme') == 'light'|| (localStorage.getItem('theme')==null && hrs >5 && hrs <18)) {
           lightMode()
           console.log(document.URL)
       }
       else {
           darkMode()
       }
   }


function lightMode() {

    //get color vars
    let root = document.documentElement;



    //set color vars
    root.style.setProperty('--background-color', lc);
    root.style.setProperty('--foreground-color', dc);
    root.style.setProperty('--used-purple', dp);
    root.style.setProperty('--used-blue', db);
    root.style.setProperty('--used-green', dg);
    root.style.setProperty('--menu-bg', lm);
    root.style.setProperty('--menu-shadow', ds);

    //home button stuff
    document.getElementById("home-button").style.color = '--foreground-color'
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", 'var(--foreground-color)' );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", 'var(--foreground-color)' );
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("fill", 'none' );


    console.log("YES")

    $( "#light-mode" ).css("display", "none" );
    $( "#dark-mode" ).css("display", "" );

    //set localstorage
    localStorage.setItem("theme", "light")

    //moth hover
    $("#moth-hover-area").hover(function(){
      $("#cursor").css({'display': 'flex', 'color': lc, 'background-color': dp, 'border-color': lc});
      $("#cursor").html('<p><small>Spirits</small></p>');
      $("#moth-2").css({'display': 'block'});
      $("#moth-1").css({'display': 'none'});
      $('html').css({'cursor': 'none'});
      changeCursor();
    }, function() {
      $("#cursor").css({'display': 'none'});
      $("#moth-2").css({'display': 'none'});
      $("#moth-1").css({'display': ''});
      $('html').css({'cursor': 'auto'});
    });

    // moon hover
      $("#moon-hover-area").hover(function(){
        $("#cursor").css({'display': 'flex', 'color': lc, 'background-color': db, 'border-color': lc});
        $("#cursor").html('<p><small>Stars</small></p>');
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
          $("#cursor").css({'display': 'block', 'color': lc, 'background-color': dg, 'border-color': lc});
          $("#cursor").html('<p><small>Stones</small></p>');
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

        //page specific stuff
        if (document.URL.includes("index.html")) {
            lightModeHomeImages();
            root.style.setProperty('--foreground-color', dc);
        }

        if (document.URL.includes("stars.html")) {
            lightModeStarsImages()
            console.log("on the events page");
            root.style.setProperty('--foreground-color', db);
            document.getElementById("nav").getElementsByTagName("h4")[2].style.color = db;
            document.getElementById("event-1").style.animation = 'none';
        }

        if (document.URL.includes("spirits.html")) {
            console.log("on the mission page");
            root.style.setProperty('--foreground-color', dp);
            document.getElementById("nav").getElementsByTagName("h4")[2].style.color = dp;
            document.getElementById("mission-statement").style.animation = 'none';
        }


}

function darkMode() {
    let root = document.documentElement;



    root.style.setProperty('--background-color', dc);
    root.style.setProperty('--foreground-color', lc);
    root.style.setProperty('--used-purple', lp)
    root.style.setProperty('--used-blue', lb);
    root.style.setProperty('--used-green', lg);
    root.style.setProperty('--menu-bg', dm);
    root.style.setProperty('--menu-shadow', ls);

    document.getElementById("home-button").style.color = '--foreground-color'
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", 'var(--foreground-color)' );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", 'var(--foreground-color)' );
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("fill", 'none' );

    if (document.URL.includes("index.html")) {
        darkModeHomeImages();
        root.style.setProperty('--foreground-color', lc);
    }

    if (document.URL.includes("stars.html")) {
        darkModeStarsImages();
        console.log("on the events page");
        root.style.setProperty('--foreground-color', lb);
        document.getElementById("nav").getElementsByTagName("h4")[2].style.color = lb;
        document.getElementById("event-1").style.animation = '';
    }

    if (document.URL.includes("spirits.html")) {
        console.log("on the mission page");
        root.style.setProperty('--foreground-color', lp);
        document.getElementById("nav").getElementsByTagName("h4")[2].style.color = lp;
        document.getElementById("mission-statement").style.animation = '';
    }

    $( "#light-mode" ).css("display", "" );
    $( "#dark-mode" ).css("display", "none" );

    localStorage.setItem("theme", "dark")

    //moth hover
    $("#moth-hover-area").hover(function(){
      $("#cursor").css({'display': 'flex', 'color': lp, 'background-color': dc, 'border-color': lp});
      $("#cursor").html('<p><small>Spirits</small></p>');
      $("#moth-2").css({'display': 'block'});
      $("#moth-1").css({'display': 'none'});
      $('html').css({'cursor': 'none'});
      changeCursor();
    }, function() {
      $("#cursor").css({'display': 'none'});
      $("#moth-2").css({'display': 'none'});
      $("#moth-1").css({'display': ''});
      $('html').css({'cursor': 'auto'});
    });

    // moon hover
      $("#moon-hover-area").hover(function(){
        $("#cursor").css({'display': 'flex', 'color': lb, 'background-color': dc, 'border-color': lb});
        $("#cursor").html('<p><small>Stars</small></p>');
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
          $("#cursor").css({'display': 'block', 'color': lg, 'background-color': dc, 'border-color': lg});
          $("#cursor").html('<p><small>Stones</small></p>');
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
}

function lightModeHomeImages() {
  document.getElementById('moth-1').src = 'images/moth-bitmap-light-1.png'
  document.getElementById('moth-2').src = 'images/moth-bitmap-light-2.png'
  document.getElementById('moon-1').src = 'images/moon-bitmap-light-1-2.png'
  document.getElementById('moon-2').src = 'images/moon-bitmap-light-2-2.png'
  document.getElementById('lotus-1').src = 'images/lotus-bitmap-light-1.png'
  document.getElementById('lotus-2').src = 'images/lotus-bitmap-light-2.png'
}

function darkModeHomeImages() {
  document.getElementById('moth-1').src = 'images/moth-bitmap-1-2.png'
  document.getElementById('moth-2').src = 'images/moth-bitmap-2-2.png'
  document.getElementById('moon-1').src = 'images/moon-bitmap-1-12.png'
  document.getElementById('moon-2').src = 'images/moon-bitmap-2-6.png'
  document.getElementById('lotus-1').src = 'images/lotus-bitmap-1.png'
  document.getElementById('lotus-2').src = 'images/lotus-bitmap-2.png'
}

function lightModeStarsImages() {
  document.getElementById('event-1-image').src = 'images/ojibwe_cosmology_5.png'
}

function darkModeStarsImages() {
  document.getElementById('event-1-image').src = 'images/ojibwe_cosmology_3.png'
}
