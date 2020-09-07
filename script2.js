function changeCSS(theme,cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    console.log(theme)
            var lc = getComputedStyle(document.documentElement).getPropertyValue('--light-color')
            var dc = getComputedStyle(document.documentElement).getPropertyValue('--dark-color')

    if (theme=="light"){
    document.documentElement.style.setProperty('--used-background-color', lc);
         document.documentElement.style.setProperty('--used-foreground-color', dc);
localStorage.setItem('theme','light')
       document.getElementById('moth-1').src='images/moth-bitmap-light-1.png';
              document.getElementById('moth-2').src='images/moth-bitmap-light-2.png';
 document.getElementById('moon-1').src='images/moon-bitmap-light-1.png';
              document.getElementById('moon-2').src='images/moon-bitmap-light-2.png';
              document.getElementById('lotus-1').src='images/lotus-bitmap-light-1.png';
              document.getElementById('lotus-2').src='images/lotus-bitmap-light-2.png';


    }else{
    document.documentElement.style.setProperty('--used-background-color', dc);
         document.documentElement.style.setProperty('--used-foreground-color', lc);
        localStorage.setItem('theme','dark')

         //  document.getElementById('ig').src='i1.png';
    
    }
    console.log(localStorage.getItem('theme'))
}