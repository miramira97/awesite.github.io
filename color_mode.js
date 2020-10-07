window.onload = function() {
    console.log('3')

    //use localstorage to pick theme so that it saves when moving around pages
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') == 'light') {
        lightMode()
        console.log(document.URL)
    }
    if (localStorage.getItem('theme') == 'dark' || localStorage.getItem('theme') == null) {
        darkMode()
    }
}

function lightMode() {

    //get color vars
    let root = document.documentElement;
    let lc = getComputedStyle(root).getPropertyValue('--light-color');
    let dc = getComputedStyle(root).getPropertyValue('--dark-color');
    let dp = getComputedStyle(root).getPropertyValue('--dark-purple');
    let db = getComputedStyle(root).getPropertyValue('--dark-blue');

    //set color vars
    root.style.setProperty('--background-color', lc);
    root.style.setProperty('--foreground-color', dc);
    root.style.setProperty('--used-purple', dp);
    root.style.setProperty('--used-blue', db);

    //home button stuff
    document.getElementById("home-button").style.color = dc
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", dc );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", dc );
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("fill", lc );


    console.log("YES")

    //page specific stuff
    if (document.URL.includes("index.html")) {
        lightModeHomeImages()
    }
    if (document.URL.includes("spirits.html")) {
        document.getElementById("nav").getElementsByTagName("h4")[2].style.color = dp

    }
        if (document.URL.includes("stars.html")) {
        document.getElementById("nav").getElementsByTagName("h4")[2].style.color = db

    }

    //set localstorage
    localStorage.setItem("theme", "light")
}

function darkMode() {
    let root = document.documentElement;
    let dc = getComputedStyle(root).getPropertyValue('--dark-color');
    let lc = getComputedStyle(root).getPropertyValue('--light-color');
    let lp = getComputedStyle(root).getPropertyValue('--light-purple');
    let lb = getComputedStyle(root).getPropertyValue('--light-blue');

    root.style.setProperty('--background-color', dc);
    root.style.setProperty('--foreground-color', lc);
    root.style.setProperty('--used-purple', lp)
        root.style.setProperty('--used-blue', lb);
;
      $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("stroke", lc );
    $( "#eye-open, #eye-open circle, #eye-open path" ).css("stroke", lc );
    $( "#eye-closed, #eye-closed circle, #eye-closed path" ).css("fill", dc );

    console.log("YES")
    document.getElementById("home-button").style.color = lc

    if (document.URL.includes("index.html")) {
        darkModeHomeImages()
    }
    if (document.URL.includes("spirits.html")) {
        document.getElementById("nav").getElementsByTagName("h4")[2].style.color = lp

    }
    localStorage.setItem("theme", "dark")
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