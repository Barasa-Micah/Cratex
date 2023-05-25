/*
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
}

function handleOrder() {
  console.log(selectedItems);
  // You can perform further actions with the selected items here
  // For example, you can send the selected items to a server or process them in any other way
  // This code currently logs the selected items to the console
  // You can replace the console.log() statement with your desired functionality
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
orderButton.addEventListener('click', handleOrder);


var basketIcon = document.querySelector('.icon');
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



var orderButtons = document.querySelectorAll('.gro1 button, .gro21 button, .gro31 button, .gro41 button');
orderButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var item = this.parentNode;
    var itemName = item.querySelector('p:first-of-type').textContent;
    var itemPrice = item.querySelector('p:last-of-type').textContent;
    
    displayOrderDetails(itemName, itemPrice);
  });
});

function displayOrderDetails(itemName, itemPrice) {
  var orderDetails = document.getElementById('orderDetails');
  orderDetails.textContent = 'Item: ' + itemName + ', Price: ' + itemPrice;
}
*/

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







