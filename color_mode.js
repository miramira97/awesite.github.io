
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
    root.style.setProperty('--background-color', lc);
    root.style.setProperty('--foreground-color', dc);
    console.log("YES")

    if (document.URL.includes("index.html")) {
        lightModeHomeImages()
    }
    localStorage.setItem("theme", "light")
}

function darkMode() {
    let root = document.documentElement;
    let lc = getComputedStyle(root).getPropertyValue('--dark-color');
    let dc = getComputedStyle(root).getPropertyValue('--light-color');
    root.style.setProperty('--background-color', lc);
    root.style.setProperty('--foreground-color', dc);
    console.log("YES")

    if (document.URL.includes("index.html")) {
        darkModeHomeImages()
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