const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        // Perform desired action based on the clicked link
        console.log(`Clicked link: ${href}`);
    });
});