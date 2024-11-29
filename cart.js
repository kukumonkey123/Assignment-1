// Check if the cart is stored in local storage, if not, create an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(name, price, image) {
    const item = { name, price, image };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' has been added to your cart!');
}


// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    displayCart(); 
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; 
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalItems++;
        totalPrice += item.price;

        // Create a new div for each item
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <button class="remove-button" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
    });

    // Update total items and price
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to handle the checkout (clearing the cart)
function checkout() {
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart'); 
    displayCart(); 
}

// Display the cart when the page loads
document.addEventListener('DOMContentLoaded', displayCart);


