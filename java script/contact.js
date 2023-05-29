// contact.js

// Get all the contact list items
const contactListItems = document.querySelectorAll('.images li');

// Add click event listener to each contact list item
contactListItems.forEach(item => {
  item.addEventListener('click', () => {
    const platform = item.innerText.split('\n')[0]; // Extract the contact platform from the list item text
    alert(`You clicked on ${platform}!`); // Display an alert with the clicked contact platform
  });
});
