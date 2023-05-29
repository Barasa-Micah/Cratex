
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
updateBasketIcon();

const basketIcon = document.getElementById('basket-icon');

// Adding event listener to the basket icon
basketIcon.addEventListener('click', displayBasketItems);


function displayBasketItems() {
  
  const basketItems = getBasketItems();

  console.log(basketItems); 
}

function getBasketItems() {
  const basketItemsData = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 }
  ];

  return basketItemsData;
}

const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];
basketIcon.addEventListener('click', displayOrderedItems);

function displayOrderedItems() {
  const orderedItemsList = document.getElementById('ordered-items-list');


  orderedItemsList.innerHTML = '';

  
  selectedItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.itemName} - ${item.itemPrice}`;
    orderedItemsList.appendChild(listItem);
  });

 
  modal.style.display = 'block';
}


closeButton.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});


function displayOrderedItems() {
   
    const orderedItemsList = document.getElementById('ordered-items-list');
    orderedItemsList.innerHTML = '';
  
    // Calculation of the total cost
    let totalCost = 0;
  
    selectedItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.itemName} - ${item.itemPrice}`;
      orderedItemsList.appendChild(listItem);
      totalCost += item.price;
    });
  
    // Display the total cost
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Total Cost: Ksh.${totalCost}`;
  
    // Display the modal
    modal.style.display = 'block';
  }


  function updateBasketIcon() {
    var basketIcon = document.querySelector('.icon');
    basketIcon.textContent = selectedItems.length;
  
  
    if (selectedItems.length > 0) {
      basketIcon.classList.add('clickable');
      basketIcon.addEventListener('click', displayOrderedItems);
    } else {
      basketIcon.classList.remove('clickable');
      basketIcon.removeEventListener('click', displayOrderedItems);
    }
  }
  

