let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart') 
let closeCart = document.querySelector('#close-cart')

cartIcon.onclick = () => {
 cart.classList.add('active');
}

closeCart.onclick = () => {
 cart.classList.add('active');
}

cart.onclick = () => {
 cart.classList.add('active');
}

if (document.readyState == 'loading'){
 document.addEventListener('DOMContentLoaded', ready)
} else {
 ready();
}

// Making Function
function ready() {
 // Remove Items From Cart
 var removeCartButtons = document.getElementsByClassName('cart-remove')
 console.log(removeCartButtons)
 
 for (let i = 0; i < removeCartButtons.length; i++) {
  var button = removeCartButtons[i]
  button.addEventListener('click', removeCartItem)
 }
 // Quantity Changes
 var quantityInputs = document.getElementsByClassName('cart-quantity');
 for (let i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
 }
 // Add to Cart
 var addCart = document.getElementsByClassName('add-cart');
 for (let i = 0; i < addCart.length; i++) {
  var button = addCart[i];
  button.addEventListener("click", addCartClicked);
 }
}

// Remoe Items From Cart
function removeCartItem(event){
 var buttonClicked = event.target;
 buttonClicked.parentElement.remove();
 updateTotal();
}
// Quantity Changes
function quantityChanged(event) {
 var input = event.target
 if (isNaN(input.value) || input.value <= 0) {
  input.value = 1;
 }
 updateTotal();
}

// Add to cart
function addCartClicked(event) {
 var button = event.target;
 var shopProducts = button.parentElement;
 var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
 console.log(title);
}

// Update Total
function updateTotal() {
 var cartContent = document.getElementsByClassName('cart-content')[0];
 var cartBoxes = cartContent.getElementsByClassName('cart-box');
 var total = 0;
 for (let i = 0; i < cartBoxes.length; i++){
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName('cart-price')[0];
  var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
  var price = parseFloat(priceElement.innerText.replace("$", ""));
  var quantity = quantityElement.value;
  total += (price * quantity);
  // If price Contain some Cents Value
  total = Math.round(total * 100 ) / 100;
  document.getElementsByClassName('total-price')[0].innerText = '$' + total;
 }
}
