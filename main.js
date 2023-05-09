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
}

// Remoe Items From Cart
function removeCartItem(event){
 var buttonClicked = event.target
 buttonClicked.parentElement.remove()
}


