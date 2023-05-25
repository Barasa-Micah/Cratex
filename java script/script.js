
        // JavaScript code goes here

        // Example: Changing the background color after 2 seconds
        setTimeout(function() {
            document.body.style.backgroundColor = '#f0d3a9';
        }, 2000);
   // Wait for the page to fully load
   window.addEventListener('load', function() {
    // Set a timeout to change the background color after 2 seconds
    setTimeout(function() {
        document.body.style.backgroundColor = 'green';
    }, 2000);
});
// Wait for the page to fully load
window.addEventListener('load', function() {
    // Set a timeout to change the background color after 2 seconds
    setTimeout(function() {
        document.body.style.backgroundColor = 'red';
        document.body.style.backgroundImage = 'linear-gradient(to bottom, navy, navy)';
    }, 2000);
});
