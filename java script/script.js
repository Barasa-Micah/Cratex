
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
        document.body.style.backgroundImage = 'linear-gradient(to bottom, white, white)';
    }, 2000);
});
    
window.addEventListener('load', function() {
       setTimeout(function() {
        document.body.classList.remove('animate-background');
    }, 2000);
});
window.addEventListener('load', function() {
    // Set a timeout to remove the animation class from the body and footer after 2 seconds
    setTimeout(function() {
        document.body.classList.remove('animate-background');
        document.querySelector('.footer').classList.remove('animate-footer');
    }, 2000);
});