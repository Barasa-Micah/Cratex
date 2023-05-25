
        setTimeout(function() {
            document.body.style.backgroundColor = '#f0d3a9';
        }, 2000);
   // Wait for the page to fully load
   window.addEventListener('load', function() {
   
    setTimeout(function() {
        document.body.style.backgroundColor = 'white';
    }, 2000);
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.style.backgroundColor = 'green';
        document.body.style.backgroundImage = 'linear-gradient(to bottom, lightgreen, white)';
    }, 2000);
});
    
window.addEventListener('load', function() {
       setTimeout(function() {
        document.body.classList.remove('animate-background');
    }, 2000);
});