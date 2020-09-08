var th = (localStorage.getItem('theme'));
console.log(th);
            var lc = getComputedStyle(document.documentElement).getPropertyValue('--light-color')
            var dc = getComputedStyle(document.documentElement).getPropertyValue('--dark-color')

if(th=="light"){
    document.documentElement.style.setProperty('--used-background-color', lc);
         document.documentElement.style.setProperty('--used-foreground-color', dc);
}else{
	
    document.documentElement.style.setProperty('--used-background-color', dc);
         document.documentElement.style.setProperty('--used-foreground-color', lc);
}