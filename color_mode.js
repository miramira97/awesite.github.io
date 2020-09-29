
window.onload = function(){
console.log('3')
console.log(localStorage.getItem('theme'))
if (localStorage.getItem('theme') == 'light') {
    lightMode()
   console.log(document.URL)
}
if (localStorage.getItem('theme') == 'dark') {
    darkMode()
}
}

function lightMode() {
    let root = document.documentElement;
    let lc = getComputedStyle(root).getPropertyValue('--light-color');
    let dc = getComputedStyle(root).getPropertyValue('--dark-color');
        let dp = getComputedStyle(root).getPropertyValue('--dark-purple');

    root.style.setProperty('--background-color', lc);
    root.style.setProperty('--foreground-color', dc);
    root.style.setProperty('--used-purple', dp);
    document.getElementById("home-button").style.color = dc

    console.log("YES")

    if (document.URL.includes("index.html")) {
        lightModeHomeImages()
    }
       if (document.URL.includes("spirits.html")) {
document.getElementById("nav").getElementsByTagName("h4")[2].style.color = dp

    }
    localStorage.setItem("theme", "light")
}

function darkMode() {
    let root = document.documentElement;
    let dc = getComputedStyle(root).getPropertyValue('--dark-color');
    let lc = getComputedStyle(root).getPropertyValue('--light-color');
            let lp = getComputedStyle(root).getPropertyValue('--light-purple');

    root.style.setProperty('--background-color', dc);
    root.style.setProperty('--foreground-color', lc);
        root.style.setProperty('--used-purple', lp);

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