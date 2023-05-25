
var selectedItems = [];

function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  var selectedTab = document.getElementById(tabName);
  selectedTab.classList.add('active');
}

function addToCart(itemName, price) {
  selectedItems.push({ itemName, price });
  updateBasketIcon();
}

function handleOrder() {
  console.log(selectedItems);
  // You can perform further actions with the selected items here
  // For example, you can send the selected items to a server or process them in any other way
  // This code currently logs the selected items to the console
  // You can replace the console.log() statement with your desired functionality
}

function updateBasketIcon() {
  var basketIcon = document.querySelector('.icon');
  basketIcon.textContent = selectedItems.length;
}

var orderButtons = document.querySelectorAll('.gro1 button, .gro21 button, .gro31 button, .gro41 button');
orderButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var item = this.parentNode;
    var itemName = item.querySelector('p:first-of-type').textContent;
    var itemPrice = item.querySelector('p:last-of-type').textContent;
    addToCart(itemName, itemPrice);
  });
});

var orderButton = document.querySelector('.content button');
orderButton.addEventListener('click', function(event) {
  event.preventDefault();
  handleOrder();
});

// Initialize basket icon count
updateBasketIcon();




// Get the basket icon element
const basketIcon = document.getElementById('basket-icon');

// Add event listener to the basket icon
basketIcon.addEventListener('click', displayBasketItems);

// Function to display the basket items
function displayBasketItems() {
  // Get the basket items data
  const basketItems = getBasketItems();

  // Display the basket items data
  console.log(basketItems); // You can replace this with your preferred way of displaying the data
}

// Function to get the basket items data (example implementation)
function getBasketItems() {
  // Replace this with your actual code to retrieve the basket items data
  // For demonstration purposes, let's assume we have a variable called 'basketItemsData' that contains the data
  const basketItemsData = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 }
  ];

  return basketItemsData;
}


// Rest of the code...

// Get the modal element and close button
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];

// Add event listener to the basket icon
basketIcon.addEventListener('click', displayOrderedItems);

// Function to display the ordered items
function displayOrderedItems() {
  // Get the ordered items list element
  const orderedItemsList = document.getElementById('ordered-items-list');

  // Clear any existing items in the list
  orderedItemsList.innerHTML = '';

  // Add the ordered items to the list
  selectedItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.itemName} - ${item.itemPrice}`;
    orderedItemsList.appendChild(listItem);
  });

  // Display the modal
  modal.style.display = 'block';
}

// Add event listener to the close button of the modal
closeButton.addEventListener('click', closeModal);

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});



  







function displayOrderedItems() {
    // Get the ordered items list element
    const orderedItemsList = document.getElementById('ordered-items-list');
    // Clear any existing items in the list
    orderedItemsList.innerHTML = '';
  
    // Calculate the total cost
    let totalCost = 0;
  
    // Add the ordered items to the list
    selectedItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.itemName} - ${item.itemPrice}`;
      orderedItemsList.appendChild(listItem);
  
      // Calculate the total cost by adding the price of each item
      totalCost += item.price;
    });
  
    // Display the total cost
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Total Cost: Ksh.${totalCost}`;
  
    // Display the modal
    modal.style.display = 'block';
  }
  







/*


  function updateBasketIcon() {
    var basketIcon = document.querySelector('.icon');
    basketIcon.textContent = selectedItems.length;
  
    // Enable the basket icon click event only if there are selected items
    if (selectedItems.length > 0) {
      basketIcon.classList.add('clickable');
      basketIcon.addEventListener('click', displayOrderedItems);
    } else {
      basketIcon.classList.remove('clickable');
      basketIcon.removeEventListener('click', displayOrderedItems);
    }
  }
  






